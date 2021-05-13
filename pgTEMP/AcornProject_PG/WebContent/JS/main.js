window.onload = function(){
	// 버튼 클릭 이벤트 등록
	document.getElementById('newGame').addEventListener('click', getNewGame, false);
	document.getElementById('recommendedGame').addEventListener('click', getRecommendedGame, false);
	document.getElementById('recommendedPost').addEventListener('click', getRecommendedPost, false);
	document.getElementById('mostViewPost').addEventListener('click', getMostViewPost, false);
	document.getElementById('recommendedQnA').addEventListener('click', getRecommendedQnA, false);
	document.getElementById('mostViewQnA').addEventListener('click', getMostViewQnA, false);

	// 중단 게임 태그 선택 이벤트 등록 
	const tags = document.getElementsByName('tag');
	tags.forEach((tag) => {
		tag.addEventListener('click', getCheckboxValue, false);
	});

	// 상단 게임 리스트 데이터 ajax 요청
	// fetch('GameListServlet')
	// 	.then(res => {
	// 		console.log(res);
	// 		if (res.status === 200) {
	// 			console.log(res);
	// 		} else {
	// 			throw new Error('Unable to fetch');
	// 		}
	// 	})
	// 	.catch(err => {
	// 		console.log('error: ', err);
	// 	});
};

// 최신게임 불러오기
function getNewGame(){
	console.log('click1');
}

// 추천게임 불러오기
function getRecommendedGame(){
	console.log('click2');
}

// 태그별 게임 불러오기
function getCheckboxValue(){
	const query = 'input[name="tag"]:checked';
	const selectedEls = 
		document.querySelectorAll(query);
	
	let result = '';
	selectedEls.forEach((el) => {
		result += el.value + ' ';
	});
	
	console.log(result);
}

// 게임게시판 추천수 정렬
function getRecommendedPost(){
	console.log('click3');
}

// 게임게시판 조회수 정렬
function getMostViewPost(){
	console.log('click4');
}

// QnA게시판 추천수 정렬
function getRecommendedQnA(){
	console.log('click5');
}

// QnA게시판 조회수 정렬
function getMostViewQnA(){
	console.log('click6');
}