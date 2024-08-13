---
layout: post
title: "Hack🪓 the #3 GraphQL"
description: GraphQL, Query Language, Apollo Server, Apollo Client, API, Graph Query Language, GraphQL이란?
date: 2023-06-22 21:08:00 +0900
category: hack

id: 3
slug: graphql
tags: []
---

<h2 id="전-html로-코딩합니다" class="center">"전 HTML로 코딩합니다."</h2>

이 카테고리에 오랜만에 발길을 준 주제에 상당히 도발적인 문구로 글을 시작해본다. 그런데 혹시 이 문장에 불편함을 느낀 개발자라면, 아마 없겠지만, 앞으로 나와 함께 더 공부하면 되겠다. 연락처는 010-xxxx... 그리고, 역시 이쪽도 거의 없을거 같은데, 개발자는 아니지만 주변 개발자 친구들 불편하게 하고 싶은 사람이라면, 저렇게 말하지 말고 이렇게 말하면 된다.

<p class="center middle-big">
"전 HTML로 <strong>프로그래밍</strong>합니다."
</p>

소위 말하는 HTML-프로그래밍 언어 논쟁은 유구한 역사를 자랑하는 주제다. 인터넷에서 밈으로 소비된지도 오래됐다. 잘 모르는 사람들이 이상하게 재현하기도 한다: "HTML로 코딩해요 ㅎㅎ". 한땐 이게 좀 과열되면서 은근슬쩍 "프로그래머"를 좀 더 올려치는 뉘앙스를 내포하기도 했었나보다. 그래서 <a href="https://yceffort.kr/2021/10/is-html-programming-language">이 글</a>처럼 나쁜 풍토를 꼬집는 목소리도 나왔던 것 같다. 물론 나는 좀 엄밀하게 따지는 편이긴 하다. 이름에 그 성질이 담겨있으니 정확하게 무엇인지 파악하고 쓰자는 의미로. 오늘의 주제는 <strong>GraphQL</strong>인데, 사실 거창하게 시작한 이 서론이랑 크게 관련은 없다. 다만 GraphQL은 왜 GraphQL인지, 왜 그런 이름이 붙었는지부터 차근차근 시작해보고자 한다.

## Language

<p class="center">
  <img src="https://i.postimg.cc/sDGsZFPY/image.jpg" alt="언어!"/>
</p>

컴퓨터는 훌륭한 일꾼이다. 말만 잘 하면 우리의 요구를 완벽히 수행해준다. 문제는 "말만 잘 하면", 우리의 모국어는 한국어인데 컴퓨터의 모국어는 0과 1로 이루어진 기계어라는 점이 발목을 잡는다. 그래서 수많은 박사와 석사, 회사원들은 컴퓨터와 사람 모두 이해 가능한 제 3의 언어를 만들기 위해 오늘도 힘쓰고 있다. 그 결과물이 바로 <strong><a href="https://en.wikipedia.org/wiki/Computer_language">컴퓨터 언어(Computer Language)</a></strong>.

컴퓨터 언어라고 하면 보통 <strong>프로그래밍 언어</strong>가 가장 먼저 떠오른다. C, JavaScript, Python, Java 등등. 프로그래밍 언어는 이름 그대로 컴퓨터 프로그램을 만드는데 사용되는 언어들을 뜻한다. 아마 누군가 소프트웨어 개발을 처음 배운다 하면 가장 먼저 프로그래밍 언어 중 하나를 선택해 배울 것이다. 여러 종류의 컴퓨터 언어들이 존재하지만 프로그래밍 언어가 가장 다양한 일을 하고, 심지어 프로그래밍 언어의 코드가 다른 언어들의 코드를 포함하거나 직접 생성하기도 할 것이다.

처음 언급한 HTML(HyperText Markup Language)도 물론 컴퓨터 언어중 하나다. <strong>마크업 언어</strong>는 문서가 어떻게 구성되어야 하는지 설명하는데 특화된 언어다. 제목은 어디에 있는지, 이 문단 안에 어떤 구성요소들이 존재하는지 등을 기술한다. 여기에 더해 CSS라는 <strong>스타일시트 언어</strong> 또한 함께 사용돼 둘은 일반적으로 세트로 취급된다. 역사만 간단히 짚고 넘어가자면, 소프트웨어의 GUI가 발전하면서 화면을 구성하는 기술도 함께 중요해졌고 <strong>특수한 목적을 가진 언어</strong>, 즉 GUI 도메인을 위한 <strong>도메인 특화 언어(Domain-specific Language)</strong>의 중요성 또한 높아졌다.

### Query Language(QL)

<p class="center">
  <img src="https://i.postimg.cc/8zjsXccV/image.png" alt="질의"/>
</p>

수많은 도메인 특화 언어 중에서도 HTML&CSS와 더불어 기본 소양으로 배우는 언어가 있다. 바로 데이터베이스를 다루기 위해 사용하는 SQL(Structured Query Language). <a href="https://en.wikipedia.org/wiki/Query_language"><strong>질의어(Query Language)</strong></a>란 데이터베이스나 정보 시스템에 질의를 하기 위해 사용되는 컴퓨터 언어를 뜻한다. 간단히 말해 질의어는 사용자가 원하는 데이터를 얻기 위해 시스템에 질문을 던지는데 특화된 언어다. 우리는 SQL을 데이터베이스라는 거대한 정보의 덩어리에서 원하는 데이터를 얻고 조작하기 위해 데이터베이스 관리 시스템(DBMS)에 질문을 던질 때 사용한다.

### Graph Query Language

<p class="center">
  <img src="https://i.postimg.cc/Mp680Fd5/G.png" alt="Gㅣㄹ의"/>
</p>

우리는 엔터티를 정점으로, 엔터티 사이의 관계를 간선으로 해 그래프를 그림으로서 데이터베이스를 설계한다(ERD). 이 그래프를 SQL의 `CREATE SCHEMA`문을 사용해 스키마의 형태로 변환하는 것이 데이터베이스 테이블을 만드는 것을 뜻한다. 시야를 조금 더 넓혀서, 일반적인 시스템 또한 컴포넌트와 그 관계로 그래프를 그려낼 수 있다. 이러한 관점에서 새로운 질의어가 만들어졌다. 우리는 <strong>Graph</strong>QL을 사용해 우리 시스템의 비즈니스 로직에 대한 스키마를 정의함으로서 시스템을 모델링 할 수 있는 것이다.

> 그래프는 현실의 현상들을 모델링 하는 강력한 도구입니다.  
> Graphs are powerful tools for modeling many real-world phenomena.  
> <a href="https://graphql.org/learn/thinking-in-graphs/">GraphQL, 모든 것이 그래프일지니</a>

SQL이 데이터베이스에 질문하기 위해 사용하는 질의어이듯, GraphQL은 시스템에 질문하기 위해 사용하는 질의어의 역할을 하고 있다. 구구절절한 설명이 길었지만, 간단히 말해 GraphQL은 캡슐화된 시스템의 인터페이스, 즉 API의 위치에 존재한다.

----

물론 JavaScript의 경우 처럼 항상 그 이름이 자기 자신을 제대로 설명하는 것은 아니다. 처음 GraphQL에 대해 공부하기 시작했을 때 생겼던 궁금증을 해결해 보고자 이름에 대한 조사를 시도해봤다. 그럼 본격적으로 GraphQL에 대한 설명을 하기 전에 먼저 첫 인상에서 올 수 있는 몇 가지 오해를 짚어보고 넘어가자.

- GraphQL은 SQL을 대체한다?  
  이름에서 발견할 수 있는 유사성이 있으나, GraphQL은 API 영역에서 기능한다. 오히려 RESTful API 설계를 대체하려는 움직임에 가깝다.

- GraphQL은 라이브러리/프레임워크다?  
  GraphQL은 라이브러리/프레임워크가 아닌 별개의 컴퓨터 언어, 그리고 <a href="https://spec.graphql.org/draft/">그 언어에 대한 기술 스펙</a>을 뜻한다. HTML이나 SQL을 떠올려 보면 된다. 표준 스펙이 존재하지만 그것이 실제 동작하기 위해서는 각 웹 브라우저 개발 업체들, DBMS 개발 업체들이 해당하는 기능들을 구현해야 한다. 시스템을 개발하는 입장에서 우리는 사용하는 프로그래밍 언어에 맞춰 GraphQL의 쿼리를 실행할 수 있는 구체적인 서버 측 코드, GraphQL 서비스를 구현해야하고, <a href="https://graphql.org/code/">이를 도와주는 라이브러리들</a>이 별도로 존재한다.

- 레퍼런스를 찾을 때 이름만 같은 유사품에 주의  
  자료를 찾다보면 대부분 GraphQL을 GQL로 줄이거나 Graph Query Language로 풀어 쓰는데에 익숙한 것을 볼 수 있다. 나도 이 문단의 이름을 저렇게 지었고. 하지만 엄밀히 따지면 <a href="https://cloud.google.com/datastore/docs/reference/gql_reference">GQL</a>은 구글에서 만든 SQL-like 질의어, <a href="https://en.wikipedia.org/wiki/Graph_Query_Language">Graph Query Language</a>는 Neo4j와 같은 그래프 데이터베이스를 위한 또다른 질의어를 뜻하기도 한다. 틀렸다는건 아닌데, 정보를 찾을 때 조심할 필요가 있다.

## GraphQL - API를 위한 쿼리 언어

<p class="center w-half">
  <img src="https://i.postimg.cc/L4L26wKq/Graph-QL-Logo-Wordmark-Stacked-Rhodamine.png" alt="GraphQL"/>
</p>

<a href="https://graphql.org/">GraphQL</a>은 2012년 페이스북(현 메타)가 개발을 시작해 2015년에 오픈 소스로 공개한 프로젝트이다. 사기업이 개발한 언어긴 하지만 현재는 별도의 재단을 설립해 비영리로 운영되고 있다. <a href="https://engineering.fb.com/2015/09/14/core-data/graphql-a-data-query-language/#Why-GraphQL">페이스북이 직접 밝힌 개발 당시 배경</a>에서 재밌는 사실을 읽을 수 있는데, 지금으로부터 11년 전의 사례에서도 새 모바일 서비스를 개발할 때 웹뷰 -> 네이티브 앱 전환 이라는 익숙한 흐름이 적용된 것을 발견할 수 있다. 페이스북의 개발팀은 네이티브 앱 개발을 시작하면서 기존 HTML 형식의 데이터를 반환하던 API를 수정할 필요성을 느끼기 시작했다. 그들은 새 모바일 앱을 위한 API를 구현하는 방법들을 조사하는 중 기존 RESTful API 방식의 문제점을 인식하게 되었다.

페이스북이 주목한 문제점과 GraphQL의 목적을 요약하면 <strong>관심사의 분리(SoC)</strong>다. 프론트엔드가 자신이 사용할 데이터 모델(일반적으로 JSON)과 그들이 이루는 그래프의 형태에 대해서만 고려하도록 만들겠다는 것이다. URL로 표시되는 자원의 위치, 테이블 조인이나 외래 키 등에 대해선 생각할 필요 없도록 하겠다는 의미이다. 즉, GraphQL은 API 호출을 추상화 하고 그에 대한 새로운 인터페이스의 역할을 하기 위해 개발되었다.

### GraphQL의 구성

<p class="center">
  <img src="https://i.postimg.cc/t4fy1dyH/Type-System.png" alt="TypeSystem"/>
</p>

GraphQL 서비스를 구축하기 위해서, 우선 서버 측에서는 클라이언트가 사용할 수 있는 이 서비스의 GraphQL 문법을 정의해야 한다. 이는 마치 서비스의 <strong><a href="https://en.wikipedia.org/wiki/Type_system">타입 시스템(Type System)</a></strong>을 정의하는 것과 같다. GraphQL의 타입 시스템은 백엔드 서비스의 <strong>스키마(Schema)</strong>로써 동작한다. 이 스키마는 <strong>필드(Field)</strong>를 가지는 <strong>타입(Type)</strong>들의 중첩된 구조로 구성된다.  

```
# 서버 측 스키마

"""
Root Schema
"""
schema {
  query: Query
}

"""
Query Operations
"""
type Query {
  # Search by ID
  todo(id: ID!): Todo
}

"""
Objects
"""
type Todo {
  id: ID!
  title: String
  done: Boolean
}
```

클라이언트는 서버가 제공하는 타입 시스템을 통해 어떤 작업(Operation)을 사용할지, 그 작업의 입/출력 객체에서 어떤 필드를 사용할지 선택해 질의문을 작성한 다음 서버로 요청을 보내게 된다. 현재 GraphQL에 존재하는 작업 유형은 다음과 같다.

- <strong>쿼리(Query)</strong> : 데이터의 조회 (Read)
- <strong>뮤테이션(Mutation)</strong> : 데이터의 변경 (Create, Update, Delete)
- <strong>서브스크립션(Subscription)</strong> : 데이터의 실시간 관찰

```graphql
# 클라이언트 측 질의문

# id가 3인 todo 데이터의 title과 done을 주세요. (쿼리Query 사용)
query getTodoById {
  todo(id: 3) {
    title
    done
  }
}

```

다시 서버는 그 질의 요청을 받아 타입 시스템을 통해 해석하고 결과를 생성하는 함수 <strong>리졸버(Resolver)</strong>를 실행해 아래와 같은 결과를 반환한다.

```json
{
  "data": {
    "todo": {
      "title": "블로그 글 쓰기",
      "done": false
    }
  }
}
```

### GraphQL의 특징

1. 클라이언트가 직접 원하는 데이터의 형태를 명시  
기존 API 호출 방식은 클라이언트가 백엔드의 API 정의에 종속되어야 한다. 백엔드가 주기로 한 데이터 형태로만 받을 수 있다는 뜻이다. 클라이언트가 필요로 하는 데이터 보다 많은 정보를 주더라도 클라이언트는 꼼짝없이 제공하는 데이터를 모두 받아야 하며(<strong>Overfetching</strong>), 클라이언트가 필요로 하는 데이터를 제공하지 않으면 추가로 API 호출을 수행해야 한다(<strong>Underfetching</strong>). 반면 GraphQL은 클라이언트가 직접 질의문을 통해 원하는 데이터 형태를 명시할 수 있게 된다.

2. HTTP와 단일 엔드포인트  
기존 웹 API들 처럼 GraphQL 서비스는 HTTP 프로토콜을 통해 제공하는 것이 일반적이다. 대신 URL을 구분해 여러 API 엔드포인트를 두는 기존 방식과 달리 GraphQL의 경우 외부로 `/graphql`이라는 단일 엔드포인트만 노출한다. 그리고 해당 URL로 `GET` 또는 `POST` 중 원하는 방식을 사용해 GraphQL 요청을 받게 만든다. 당연한 이야기겠지만 클라이언트는 `GET`을 사용할 경우 URL 쿼리 파라미터에, `POST`를 사용할 경우 요청의 바디에 GraphQL 질의문을 전달하면 된다. 여담으로 단일 엔드포인트에 <a href="https://github.com/graphql/graphiql">GraphiQL</a>이라는 유용한 테스팅 도구를 물릴 수도 있다. (<a href="https://rickandmortyapi.com/graphql">이렇게</a>)    
또 여담으로 <a href="https://github.com/graphql/graphql-over-http/blob/main/spec/GraphQLOverHTTP.md">GraphQL over HTTP</a>라는 프로젝트도 별도로 존재한다. 통신 계층 프로토콜 운용 방법을 정확하게 명시하지 않은 기존 GraphQL 명세를 보완하기 위한 새로운 명세로 이해하면 될 것 같다.

1. API 버전 명시를 권장하지 않음  
리소스가 재설계 될 때 마다 `/v1` `/v2` 같은 식으로 URL에 버전을 명시해 API를 구분짓던 기존 방식과 달리 GraphQL은 버전이 특별히 필요하지 않다. 앞서 말했듯 서버 측에서 어떤 데이터를 주는지 결정짓지 않고(즉 클라이언트의 API의 사용이 응답에 종속되지 않고) 클라이언트 측에서 원하는 데이터를 선택할 수 있기 때문. 재설계 또는 변경이 필요하다면 기존 GraphQL 스키마에 새로운 타입을 추가하거나 새로운 필드를 추가하면 된다. 거의 사용되지 않는 쿼리가 파악된다면 별도로 `@deprecated` 표시를 해 클라이언트에게 안전하게 안내할 수도 있다. 덕분에 API 호출 영역이 조금 더 부드러워(Soft)진다고 표현하고 싶다.

### GraphQL의 도전과제들

간략하게 알아봤지만 GraphQL은 이처럼 기존 방식에 비교했을 때 눈에 띄게 다른 특징들이 존재한다. 기존 방식에 약간의 수정을 가한다는 접근방식이 아닌 새로운 패러다임을 제안하는 수준에 가깝기 때문. 따라서 GraphQL을 사용했을 때 새롭게 맞닥뜨릴 수 있는 문제들 또한 존재한다.

<strong>트리 재귀 질의</strong>  

<p class="center w-3-quarter">
  <img src="https://i.postimg.cc/MZR6Fxyh/reddit.png" alt="reddit"/>
  <br/>
  <a href="https://www.reddit.com/r/OnePiece/">r/OnePiece</a>
</p>

위처럼 꼬리에 꼬리를 물 수 있는 댓글 데이터를 GraphQL을 사용해서 가져오려면 어떻게 해야할까?

```graphql
query {
  comments {
    id
    content
    comments {
      id
      content
      comments {
        id
        content
        comments {
          # ...
        }
      }
    }
  }
}
```

클라이언트가 데이터의 형태를 결정해야 하는 GraphQL에서는 이 중첩의 깊이가 어디까지 가는지 알 수 없다. GraphQL 차원에서 전체 루프를 탐색할 수 있도록 만드는 기능을 추가하는 것은 사이클과 무한 루프의 가능성 때문에 현실적으로 힘들다. <a href="https://github.com/graphql/graphql-spec/issues/91#issuecomment-254895093">관련 문제에 대한 논쟁은 꽤나 오래 전부터 지속된걸로 보인다</a>. 일단은 쿼리가 전체 데이터를 가져오도록 하지 말고 "댓글 더 가져오기" 같은 기능으로 제어하는 것을 추천한다. 실제로 위에서 캡처로 보여준 Reddit 또한 댓글을 더 읽어오려면 버튼을 눌러야 된다. 또한 `fragment`라는 기능을 통해 GraphQL 코드를 재사용 가능하도록 만들 수 있으니 위의 중첩 지옥을 조금은 해소하는 방법을 적용할 수도 있다.

<strong>네트워크 수준의 캐싱</strong>  

기존 API 방식에서는 <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Caching">HTTP 캐싱</a>을 쉽게 활용할 수 있었다. 하지만 GraphQL에서는 각 작업이 URL 기반 엔드포인트가 아닌 질의문에 의해 결정되기 때문에 HTTP 캐싱을 적용하기 까다로워진다. 따라서 GraphQL 서비스에서는 URL 기반이 아닌 쿼리 기반으로 개발자가 캐싱을 구현해야 한다. 다행히 Well-known 문제인 만큼 이를 해결하는 도구들이 이미 존재한다. <strong>Persisted Query</strong>라는 것을 사용하는데, 개념만 간단히 설명하자면 쿼리에 해싱된 ID를 줘서 캐싱하는 전략을 뜻한다.

<strong>N+1 문제</strong>  

N+1 문제는 1:N 관계를 가지는 엔터티를 조회할 때 쿼리가 추가적으로 발생하는 문제를 뜻한다. 보통 JPA 같은 ORM을 다룰 때 발생하는 문제인데, GraphQL에서도 그 특성상 발생할 수 있다.

```graphql
query {
  posts { # 1번 질의 발생
    id
    content
    comments {  # (!) post 갯수(N)만큼 질의 발생 가능
      # ...
    }
  }
}
```

GraphQL의 N+1 문제는 서버 측에서 처리할 수 있다. 이 또한 역시 Well-known 문제인지라 이번엔 페이스북이 직접 유틸리티 도구를 만들어뒀다. <strong><a href="https://github.com/graphql/dataloader">DataLoader</a></strong>라는 라이브러리인데, 데이터를 로드할 때 <strong>batching(한 번에 묶어서 처리)</strong>을 지원해준다. 이를 GraphQL 리졸버에 적용해 N+1 문제를 해결하는 것이 일반적이다.

## 실습

<p class="center rounded-edge">
  <a href="https://graphql.org/code/">
    <img src="https://i.postimg.cc/rFc28gvV/gqlcode.png" alt="gqlcode"/>
  </a>
</p>

GraphQL이 스키마와 쿼리 그 자체로 동작하는 것은 아니기 때문에 개발자는 GraphQL 서버와 GraphQL 클라이언트를 개발해야 한다. HTML을 렌더링하는 웹 브라우저가 다양하듯이 <a href="https://graphql.org/code/#javascript-tools">개발에 도움을 줄 도구들은 언어별로 다양하게 존재한다</a>. 그 중 현재(2023년) 가장 많이 사용되는 조합은 JavaScript/TypeScript와 <a href="https://www.apollographql.com/">Apollo</a>의 <a href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a>/<a href="https://www.apollographql.com/docs/react">Apollo Client</a>. 그 외에 서버에서는 <a href="https://the-guild.dev/graphql/yoga-server">GraphQL Yoga</a> 또한 많이 사용되고 있으며 클라이언트에서는 페이스북이 만든 프레임워크 <a href="https://relay-ko.github.io/">Relay</a>를 사용하는 자료도 꽤 찾아볼 수 있었다. 여기선 Apollo 공식 문서를 따라 간단하게 실습해보자.

### GraphQL을 직접 구현하기 위한 도구 (서버 편)

<p class="center middle-big">
<strong>
<a href="https://www.apollographql.com/docs/apollo-server/getting-started">Apollo Server</a>
</strong>
</p>

<strong>1 ) 먼저 새 프로젝트 작업 공간을 만든다.</strong>  
```bash
mkdir graphql-server-example
cd graphql-server-example
npm init --yes && npm pkg set type="module"
```

<strong>2 ) 필요한 패키지를 설치하고 엔트리 포인트를 만든다.</strong>  
```bash
npm install @apollo/server graphql
npm install --save-dev typescript @types/node
mkdir src
touch src/index.ts
touch tsconfig.json
```
```json
// tsconfig.json
{
  "compilerOptions": {
    "rootDirs": ["src"],
    "outDir": "dist",
    "lib": ["es2020"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "types": ["node"]
  }
}
```
```json
// package.json
{
  // ...etc.
  "scripts": {
    "compile": "tsc",
    "start": "npm run compile && node ./dist/index.js",
    // other scripts
  }
  // other dependencies
}
```
함께 설치하는 <a href="https://www.npmjs.com/package/graphql">`graphql`</a> 패키지는 <a href="https://graphql.org/graphql-js/">GraphQL 공식 문서에서도 확인할 수 있는</a> GraphQL 코어 라이브러리이다. Apollo 등 별도의 라이브러리 없이 이 패키지 만으로 Node GraphQL 서비스를 구현할 수도 있다.

<strong>3 ) GraphQL 스키마를 정의한다.</strong>  
```typescript
// index.ts
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// "스키마"는 타입 정의의 묶음을 뜻한다.(typeDefs)
// 또한 데이터에 대한 질의문이 어떤 형태로 이루어져야 하는지 정의하기도 한다.
const typeDefs = `#graphql
  # GraphQL의 주석은 # 기호로 나타낸다.

  # 이 "Book" 타입은 우리 데이터 소스의 모든 책들에 대해
  # 질의 가능한 필드들을 정의하고 있다.
  type Book {
    title: String
    author: String
  }

  # "Query" 타입은 서비스에서 클라이언트가 요청 가능한 쿼리의 목록을 나타낸다.
  # 이 경우 "books" 쿼리는 위에서 정의한 책들의 배열을 반환한다.
  type Query {
    books: [Book]
  }
`;
```
문자열 형태로 스키마를 하드코딩해서 정의했다. 프로젝트가 커지면 `.gql` 혹은 `.graphql` 확장자로 따로 파일을 분리해 저장해도 좋다. 템플릿 리터럴의 첫 부분에 `#graphql` 주석을 넣은 것을 볼 수 있는데, 이렇게 하면 IDE가 이 문자열을 GraphQL 코드로 인식해 코드 하이라이팅을 제공해줄 것이다.

<strong>4 ) 데이터셋을 정의한다.</strong>  
```typescript
// index.ts

// ...

/* 우리의 데이터 소스, 우리의 데이터베이스 */
const books = [
  {
    title: 'One Piece',
    author: 'Oda Eiichiro',
  },
  {
    title: 'Nausicaä of the Valley of the Wind',
    author: 'Miyazaki Hayao',
  },
];
```
실습 용도로 간단한 데이터를 준비했다. 우리 서비스는 요청을 받으면 이 배열에서 책 데이터를 가져와 반환해준다.

<strong>5 ) 리졸버를 정의한다.</strong>  
```typescript
// index.ts

// ...

// "리졸버"는 스키마에서 정의한 데이터를
// 어떻게 가져올지 정의하는 함수들을 뜻한다.
// 이 리졸버는 위에서 정의한 "books" 배열에서 책들을 검색한다.
const resolvers = {
  Query: {
    books: () => books,
  },
};
```
이 경우는 그저 앞서 정의한 `books` 배열을 그대로 리턴할 뿐이지만, 리졸버에서는 별도의 데이터베이스에 접근하거나 다른 비즈니스 로직을 실행하도록 함수를 정의하면 된다.

<strong>6 ) `ApolloServer`의 인스턴스를 생성한다.</strong>  
```typescript
// index.ts

// ...

// ApolloServer 생성자엔 다음 두 매개변수가 필요하다:
// 스키마, 리졸버 목록
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 서버 실행
const { url } = await startStandaloneServer(server, {
  listen: { port: 8888 },
});

console.log(`🚀  Server ready at: ${url}`);
```
원하는 포트 번호를 설정해서 서버를 실행한다. 서버를 실행할 때 `startStandaloneServer()`라는 함수를 사용한다. 공식 문서의 설명에 따르면 이 함수는 내부적으로 Exrpess 인스턴스를 생성해서 `ApolloServer` 인스턴스를 미들웨어로 사용한다고 한다. 응용하면 우리가 생성한 인스턴스 변수 `server`를 원하는 서버 프레임워크에 적용할 수 있을 것으로 보인다.

<strong>7 ) 서버를 실행하고 테스트해본다.</strong>  
```bash
npm start
```
<p class="center rounded-edge">
  <img src="https://i.postimg.cc/RFzz3LqT/apolloserver.png" alt="apolloserver"/>
</p>

서버를 실행한 후 웹 브라우저로 <a href="http://localhost:8888">http://localhost:8888</a>에 접속하면 위와 같은 GraphiQL 기반 도구를 확인할 수 있다.

<p class="center rounded-edge">
  <img src="https://i.postimg.cc/1t8x87r2/postman.png" alt="postman"/>
</p>

혹은 이렇게 포스트맨 같은 테스팅 도구를 활용해 질의를 보내볼 수도 있다. 포스트맨도 GraphQL에 대한 지원이 깔끔하게 되어있는 편.

### GraphQL을 직접 사용하기 위한 도구 (클라이언트 편)

<p class="center middle-big">
<strong>
<a href="https://www.apollographql.com/docs/react/get-started">Apollo Client</a>
</strong>
</p>

<strong>1 ) 새 React 프로젝트를 생성한다.</strong>  
```bash
npx create-react-app graphql-app-example
# (프로젝트 생성 완료 후)
cd graphql-app-example/
npm install
```
먼저 CRA 등의 도구로 React 프로젝트를 생성한다.

<strong>2 ) 필요한 패키지를 설치한다.</strong>  
```bash
npm install @apollo/client graphql
```

<strong>3 ) `ApolloClient`를 초기화한다.</strong>
```jsx
// index.js

// ...

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8888/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
```
인스턴스를 생성하고 어플리케이션의 최상단에서 `ApolloProvider`로 묶어준다. 이제 하위 컨텍스트에서 `ApolloClient`의 인스턴스를 사용할 수 있게 된다. 인스턴스를 생성할 때의 코드에서 인상깊은 점은, Apollo Client 라이브러리가 캐시 기능을 지원해준다는 점이다.

<strong>4 ) 쿼리를 정의하고 `useQuery` 훅을 사용해 데이터를 가져온다.</strong>  
```jsx
// App.js

import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetAllBooks {
    books {
      author
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="App">
      {data.books.map(({ author, title }) => {
        return (
          <div key={author}>
            <h1>{title}</h1>
            <div>{author}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
```
라이브러리가 제공해주는 함수 리터럴 `gql`을 사용해 쿼리를 정의할 수 있다. `useQuery` 훅에 그 쿼리를 전달해 요청을 발생시키고 결과를 받아 사용할 수 있다.

<p class="center rounded-edge">
  <img src="https://i.postimg.cc/FH6GTLCS/apolloclient.png" alt="apolloclient"/>
  <br/>
  이제 이 데이터를 프론트엔드에서 잘 요리하면 된다.
</p>

## 마무리

<p class="center w-3-quarter rounded-edge">
  <a href="https://rickandmortyapi.com/documentation/">
  <img src="https://i.postimg.cc/wvFdy2FJ/rick.png" alt="rickandmorthy"/>
  <br/>
  Rick and Morty API
  </a>
</p>

자료를 조사하면서 공개 API를 GraphQL로 제공하고 있는 서비스를 Chat GPT에 물어봤었다. 그 중 하나로 "Rick and Morty API"를 말해주던데, 이건 또 뭔 환각 현상이냐며 코웃음을 쳤지만 실제로 있더라. 여기에 GraphQL 씩이나...?

사실 GraphQL이 고전적인 방식의 문제점을 대부분 해결하는 것으로 보이긴 해도 생각보다 아직까진 GraphQL로 API를 공개하고 있는 서비스는 많지 않다. 규모가 큰 서비스 중에서는 <a href="https://docs.github.com/ko/graphql">Github</a> 정도. <a href="https://www.quora.com/Why-are-companies-still-choosing-REST-API-when-GraphQL-is-more-efficient">GraphQL이 더 효율적인데 왜 회사들은 여전히 REST API를 사용 중인가요?</a> 라고 질문한 3년 전 질문에 달린 답변에서는 이렇게 이야기하고 있다. 아무래도 마무리 부분에는 힘이 빠져서 DeepL의 힘을 빌렸다.

> - 고객 채택: 특히 B2B 기업의 경우, GraphQL API를 만들면 파트너와 고객이 REST에 익숙해져 있어 이를 채택할 준비가 되어 있지 않을 것이라는 우려가 있습니다. 시간이 지나면 이러한 우려는 사라질 것입니다. 과거에 SOAP에서 REST로, XML에서 JSON으로 전환할 때에도 이러한 문제가 발생했습니다.  
> - 기술적 한계: GraphQL은 성능 측면에서 단점이 있습니다. 예를 들어, 백엔드에서 조인 문이 필요한 요청이 문제가 되었습니다. 또한 속도 제한은 GraphQL보다 REST에서 더 간단합니다. 속도 제한 문제는 2019년에 해결된 것으로 보이지만 다른 기술적 걸림돌은 여전히 해결해야 할 과제입니다.
> - 디자인: 두 가지 모두에 대한 사용 사례가 있기 때문에 GraphQL이 REST를 완전히 추월하지는 않을 것이라는 데 많은 사람들이 동의합니다. 일부 앱은 콘텐츠의 페이지가 지정된 선형 목록을 가져오고, 단일 생성 또는 업데이트를 수행하는 등 간단한 요청만 수행하면 됩니다.  
> (DeepL로 변역됨)

이 답변 이후로 3년이 지났지만, 아직까지는 좀 더 지켜봐야 할 것 같다. 별개로, 클라이언트 입장에서는 GraphQL 쪽이 조금 더 재밌다는 생각은 든다.

<p class="center">
참고자료  
</p>

- <a href="https://fourwingsy.medium.com/graphql%EC%9D%84-%EC%98%A4%ED%95%B4%ED%95%98%EB%8B%A4-3216f404134">GraphQL을 오해하다</a>
- <a href="https://principledgraphql.com/">https://principledgraphql.com/</a>
- <a href="https://deview.kr/data/deview/session/attach/1100_T1_%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB_GraphQL%20API%20%E1%84%81%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%A5%20%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A2%E1%84%87%E1%85%A9%E1%84%8C%E1%85%B5%20%E1%84%86%E1%85%AF.pdf">GraphQL API 까짓꺼 운영해보지 뭐 - DEVIEW 2020</a>  
- <a href="https://monkeydeveloper.tistory.com/entry/%EA%B8%B0%EC%88%A0-%EB%B0%9C%ED%91%9C-GraphQL-%EB%B3%B4%EC%95%88-%EC%9C%84%ED%98%91%EA%B3%BC-%EC%A7%80%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95">기술 발표) GraphQL 보안 위협과 지키는 방법</a>
- <a href="https://labs.getninjas.com.br/pain-points-of-graphql-7e83ba5ddef7">Pain Points of GraphQL</a>
- <a href="https://y0c.github.io/2019/11/24/graphql-query-optimize-with-dataloader/">GraphQL DataLoader를 이용한 성능 최적화</a>