var http = require('http');
var Promise = require('bluebird');
//var Promise = require('Promise');
var cheerio = require('cheerio'); //该模块负责解析爬到的html
var baseUrl = 'http://www.imooc.com/learn/';
//var videoIds = [348, 259, 197, 134, 75]; //课程录制时这些id前都是video/
var videoIds = [348, 637, 259] // learn/

function filterChapters(html) {
	var $ = cheerio.load(html);

	var chapters = $('.chapter');

	var title = $('.course-infos .path span').text(); //进击Node.js基础（一）
	var number = parseInt($(('.static-item l')[2]).text().trim()); //学习的具体人数


	//爬多个课程时期望的courseData数据结构
	/*courseData = {	//对象字面量
		title: title,
		number: number,
		chapters: [{
			chapterTitle: '',
			videos: [{
				title: '', 
				id: ''
			}]
		}]
	} */



	var courseData = {
		title: title,
		number: number,
		chapters: []
	}

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

		courseData.chapters.push(chapterData);
	});

	return courseData;
}

function printCourseInfo(coursesData) {
	coursesData.forEach(function(courseData) {
		console.log(courseData.number + ' 人学过  ' + courseData.title + '\n');
	});

	coursesData.forEach(function(courseData) {
		console.log('### ' + courseData.title + '\n');

		courseData.chapters.forEach(function(item) {
			var chapterTitle = item.chapterTitle;
			console.log(chapterTitle + '\n');

			item.videos.forEach(function(video) {
				console.log('  【' + video.id + '】' + video.title + '\n');
			});
		});

	});
}

function getPageAsync(url) {
	return new Promise(function(resolve, reject) {

		console.log('正在爬取 ' + url);

		http.get(url, function(res) {
			var html = '';

			res.on('data', function(data) {
				html += data;
			});

			res.on('end', function() {
				resolve(html);

				/*var courseData1 = new Array();
				courseData1 = filterChapters(html);*/

				//printCourseInfo(courseData1);
			});

		}).on('error', function(e) {
			reject(e);
			console.log('获取课程数据出错！');
		});
	});
}

//getPageAsync(url);

var fetchCourseArray = [];

videoIds.forEach(function(id) {
	//getPagesAsync函数爬完返回一个promise对象，将该对象push进入fetchCourseArray数组
	fetchCourseArray.push(getPageAsync(baseUrl + id));
});

//模拟多个promise同时爬的并发控制，来爬取不同课程
Promise
	.all(fetchCourseArray) //数组里是一个个的promise
	.then(function(pages) { //pages是点进url后，前面爬取的html代码
		//对爬获的数据的加工处理

		var coursesData = [];

		pages.forEach(function(html) {
			var courses = filterChapters(html);

			coursesData.push(courses);
		});

		coursesData.sort(function(a, b) {
			return a.number < b.number; //从大到小？
		})

		printCourseInfo(coursesData);

	});