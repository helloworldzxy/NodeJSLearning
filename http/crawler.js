var http = require('http');
var cheerio = require('cheerio'); //该模块负责解析爬到的html
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
	var $ = cheerio.load(html);

	var chapters = $('.chapter');

	//爬某单个课程时期望的courseData数据结构
	/*[{
		chapterTitle: '',
		videos: [{
			title: '', 
			id: ''
		}]
	}]*/


	var courseData = [];

	chapters.each(function(item) {
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};

		videos.each(function(item) {
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			var id = video.attr('href').split('video/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			});
		});

		courseData.push(chapterData);
	});

	return courseData;
}

function printCourseInfo(course) {
	//var courseData = courseData;
	course.forEach(function(item) {
		var chapterTitle = item.chapterTitle;

		console.log(chapterTitle + '\n');

		item.videos.forEach(function(video) {
			console.log('  【' + video.id + '】' + video.title + '\n');
		});
	});
}

http.get(url, function(res) {
	var html = '';

	res.on('data', function(data) {
		html += data;
	});

	res.on('end', function() {
		var courseData1 = new Array();
		courseData1 = filterChapters(html);

		printCourseInfo(courseData1);
	});

}).on('error', function() {
	console.log('获取课程数据出错！');
});