---
layout: post
title: "Hack🪓 the #5 브라우저 개발자 도구"
description: tmp
date: 2026-04-01 01:24:00 +0900
category: hack

id: 5
slug: devtools
tags: [🪓, Front-end, Web Browser]

coverImage: "/assets/blog/coverImages/hack-5.png"

ogImage:
  url: "/assets/blog/coverImages/hack-5.png"
---

<h2 id="장인은-도구를-가리지-않는다." class="center">장인은 도구를 가리지 않는다.</h2>

<p class="center rounded-edge-16 w-3-quarter">
  <img src="https://i.postimg.cc/vTMR7BCk/image.png" alt="장인은 도구를 가리지 않는다"/>
</p>

어떤 직업이든 간에 저마다 수족처럼 다루게 되는 도구가 있기 마련이다. 흔히들 머리를 쓰는 직업으로 여겨지는 소프트웨어 개발자도 예외는 아니다. 멀리갈 것도 없이 일단 컴퓨터가 있어야 하고 거기에 최소 키보드, 마우스, 모니터는 연결되어 있어야 사람처럼 일할 수 있다. 이런 하드웨어들을 물리적인 도구라고 표현했을 때 개발자에겐 논리적인 도구, 소프트웨어도 필요하다. 코드를 작성할 에디터, 실행할 컴파일러/빌더/인터프리터/기타등등... 그리고 그 결과를 확인할 디버거 정도가 있다.

그렇다면 조금 더 상황을 한정지어, 웹 프론트엔드 개발자에게 있어 필요한 도구는 무엇일까? 코드 에디터로는 대부분 VSCode(Cursor) 내지 웹스톰을 사용할 것이다. 요즘엔 또 프레임워크 없이는 새로운 프로젝트 개발이 흔치 않은, 고도화된 프론트엔드 개발 환경을 갖추고 있는 만큼 대부분 Vite나 Next.js 등을 사용해 프로젝트를 빌드하고 실행할 것이다. 그리고 그렇게 빌드되어 HTML + CSS + JS 형태로 생성된 결과물을 확인하기 위해선 웹 브라우저가 필요하다. 크롬, 파이어폭스, 사파리, 웨일...

그런데 웹 브라우저를 통해 보이는 웹 페이지의 외관만으로는 개발자가 구현한 내용이 완벽히 동작하는지 확인하기엔 부족함이 있다. 사용자에겐 드러나지 않는 불필요한 무한 루프가 있어 메모리가 줄줄 새고 있을수도 있고, 결과가 잘 나타나는 것 처럼 보이는 API 요청이 사실 불필요하게 중복 호출되고 있을수도 있다. 사실 웹 브라우저는 그 자체만으로 디버거라기보단 웹 페이지의 실행 환경이라고 봐야한다. 그리고 그 실행 환경에서 개발자들을 위해 만들어진 디버거가 있으니, 바로 각 브라우저마다 제공해주는 <strong>개발자 도구</strong>이다.

## 브라우저 개발자 도구

<p class="center rounded-edge-16 w-3-quarter">
  <img src="https://i.postimg.cc/9fLLWTtS/image.png" alt="개발자도구"/>
  <br/>
  자... 이게 개발자 도구야
</p>

웹 개발자라면 자신이 짠 코드가 잘 돌아가는지 확인해보기 위해 콘솔 로그(`console.log`)를 로직 중간에 삽입하고, 브라우저로 가서 개발자 도구를 열어 원하는 순간에 로깅이 되는지를 확인하는 식으로 개발을 진행할 것이다. 이 버튼이 클릭이 먹히는지, 내가 원하는 조건문의 분기가 동작하는지, API 호출이 제대로 완료되었는지...

근데 솔직히 말해, 웹 개발 하는 입장에서 개발자 도구를 모르는 사람이 있을까? 나도 스스로 생각해보면 <i>"이게 개발자 도구야"</i>라는 소개는 마치 <i><a href="https://www.google.com/search?q=%EC%9D%B4%EA%B2%8C+%ED%81%B4%EB%A6%AD%EC%9D%B4%EC%95%BC">"이게 클릭이야"</a></i> 정도의 표현으로 느껴진다. 기본 중의 기본이라는 소리. 하지만 Back to basics라는 말도 있듯이, 또는 저명한 수학자가 1+1=2라는 사실을 굳이 증명해냈듯이 한 번 이 익숙한 도구를 파헤쳐 보는 것은 어떨까란 생각이 들었다. 게다가 최근 회사일을 하며 이 도구가 생각보다 더 깊고 다양한 기능을 제공한다는 사실도 깨달았거든.

## 개발자 도구의 역사

<div class="center">
  <strong><a href="https://flailingmonkey.com/the-history-of-firebug/">Firebug의 역사</a></strong>
<br/>(좀 더 자세한 역사 공부를 원한다면 위 글을 읽어보자.)
</div>

지금이야 사실상의 업계 표준이 되었지만, 그렇다고 개발자 도구가 하루아침에 하늘에서 뚝 떨어진 마법의 소라고동 같은 물건은 아니었다. 현대적인 개발자 도구의 시초는 2000년대 초 <a href="https://en.wikipedia.org/wiki/Joe_Hewitt_(programmer)">조 휴이트(Joe Hewitt)</a>가 개발해 파이어폭스 브라우저의 확장 기능으로 처음 선보인 <strong>파이어버그(Firebug)</strong>로 알려져 있다. 파이어버그 역시 모든 것이 바닥 부터 만들어진 것이 아니었고, Venkman Javascript Debugger라는 도구의 영향을 받아 개발되었다고 한다. 파이어버그를 구글에서 검색해보면 까마득한 10년, 20년 전 게시글들을 찾아볼 수 있다. 그리고 그런 글들에 첨부된 이미지를 보면 UI가 익숙할 것이다.

파이어버그가 선보인 기능들은 당시 기준 웹 개발자들 사이에서 획기적인 기능들이었을 것이다. 파이어폭스 뿐만이 아니라 다른 브라우저들도 파이어버그를 벤치마킹해 저마다 자체적인 디버깅 능력들을 갖추기 시작했고, 파이어폭스 역시 확장 기능이었던 파이어버그를 기본 기능으로 채택하였다고 한다. 따라서 모든 브라우저들이 저마다의 웹 개발자를 위한 전용 도구들을 제공함으로서 우리들은 이 도구를 굳이 "파이어버그"라는 이름 대신 "개발자 도구"라는 범용적인 이름으로 칭하게 된 것이다.

## 개발자 도구의 탭 톺아보기

자, 다시 <i>"이게 클릭이야"</i>로 돌아가보자. 개발자 도구는 브라우저를 열고 `F12` 또는 다음 단축키로 열 수 있다.

- Windows: `Ctrl` + `Shift` + `i`
- Mac: `Cmd` + `Option` + `i`

혹은 페이지에 마우스 오른쪽 클릭을 한 다음 "검사" 메뉴를 누르거나, 브라우저마다 제공하는 메뉴를 열심히 찾다 보면 "개발자 도구" 항목을 발견할 수 있을 것이다.

앞서 역사를 짧게 설명하면서 말했듯 개발자 도구는 브라우저 무관 동일한 뿌리를 갖고 있기 때문에 서로 다른 브라우저들도 대부분의 UI는 공유하고 있을 것이다. 다만 조금씩은 다른 부분도 있긴 할거니까 이 글에선 가장 점유율이 높은 크롬 브라우저 기준으로 설명한다는 점은 미리 언급하고 넘어가겠다.

또, 이름에 걸맞게 개발자 도구는 광범위한 기능을 제공하고 있기 때문에 아마 이 글 만으론 100% 설명이 되긴 어려울 것이다. 이 글에선 주로 사용하는 기능들 위주로 살펴볼 예정이다. 당연한 이야기겠지만 <a href="https://developer.chrome.com/docs/devtools?hl=ko">공식 문서</a>에서 잘 설명하고 있으니 더 깊고 자세히 알아보고 싶다면 공식 문서를 읽도록 하자.

### 요소(Elements)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/xdvr1SXW/image.png" alt="elements"/>
</p>

첫 번째로 소개할 기능은 <strong>"요소(Elements)"</strong> 탭이다. 요소 탭은 기본 설정 기준 가장 첫 번째로 노출되는 탭으로, 만약 프론트엔드 개발을 한다면 가장 자주 찾게 되는 주무기 같은 기능이 될 것이다. 이때 요소(Elements)란 현재 문서를 구성하는 각각의 일부분들을 의미한다.

<a href="/hack/4/rendering-in-web#중요-렌더링-경로critical-rendering-path">웹 사이트는 구성하는 DOM</a>

DOM(Document Object Model)이랑 연관지어서 설명하기...
 
현재 글에서 이 단락도 요소, 바로 위에 첨부된 이미지도 요소, 화면 오른쪽 하단에 있는 버튼들도 요소이다. 

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/zDyPq1jY/image.png" alt="요소 사용례1"/>
  <br>
  짠
</p>

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/W3F6csP0/image.png" alt="요소 사용례2"/>
</p>



### 콘솔(Console)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/yYMrgb4m/image.png" alt="console"/>
</p>

### 소스(Sources)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/mg4Jp5X8/image.png" alt="sources"/>
</p>

### 네트워크(Network)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/8zd5j28L/image.png" alt="network"/>
</p>

### 성능(Performance)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/t4b6Stp2/image.png" alt="performance"/>
</p>

### 메모리(Memory)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/qvptXJx5/image.png" alt="memory"/>
</p>

### 애플리케이션(Application)

<p class="center rounded-edge-16">
  <img src="https://i.postimg.cc/j2V2Wtjm/image.png" alt="application"/>
</p>

## 개발자 도구 응용 사례

## 조금은 더 진일보한 도구들

- 프록시

- 프레임워크(Vue/리액트) 개발자 도구

- LocatorJS

## 마무리


- 개발자 도구는 자바스크립트 실행 환경이다,
- 개발자 도구는 네트워크 모킹이 가능하다.
  - 네트워크 블록
  - 네트워크 오버라이드
    - 정적 파일 교체하기
  - 기초적인 프록시 동작
- 개발자 도구는 타임존을 변경할 수 있다.
- 개발자 도구는 에이전트 변경이 가능하다.

