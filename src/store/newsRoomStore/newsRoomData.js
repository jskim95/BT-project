var axios = require('axios')
var cheerio = require('cheerio')

const state = {
    newsRoomData: [],
  }

  const getters = {
  }

  const mutations = {
  }

  const actions = {

    getNewsRoom({state, commit}, data) {
      // NewsRoom 게시글 총 갯수 index 배열에 담아두기
      var newsRoomPage = [406, 52, 71, 163]

      // 반복문을 통해 모든 게시글 크롤링
      for(var i=0; i<newsRoomPage.length; i++) {
        axios.get('http://blog.sinsiway.com/newsroom/'+newsRoomPage[i]+'/')
        .then(res => {
          var $ = cheerio.load(res.data)

          // title == 제목
          // published == 게시글 작성 날짜
          // updated == 게시글 업데이트 날짜
          // content == 게시글 내용
          var title = $('#content > div:nth-child(2) > article > div > h1').text()
          var published = $('#content > div:nth-child(2) > article > div > p > time.published').text()
          var updated = $('#content > div:nth-child(2) > article > div > p > time.updated').text()
          var content = $('#content > div:nth-child(2) > article > div > div.entry.themeform > div.entry-inner > p').text()

          // 날짜별로 게시글을 표현하기위해서 날짜 숫자만 출력
          var checkYear = "";
          var checkMonth = "";
          var checkDay = "";

          for(var j=0; j<published.length; j++) {
            if(published[j]>=0 && j<4) {
              checkYear += published[j]
            } else if(published[j]>=1 && j>=4 && j<=8) {
              checkMonth += published[j]
            } else if(published[j]>=1 && j>=9 && j<12) {
              checkDay += published[j]
            }
          }


          state.newsRoomData.push([checkYear, checkMonth, checkDay, title, published, updated, content])

          if(state.newsRoomData.length == newsRoomPage.length) {
            state.newsRoomData.sort()
            console.log(state.newsRoomData)
          }

        }) //axios 요청 끝
      } // 반복문 끝
    }, // getNewsRoom함수 끝

  }


export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,

};
