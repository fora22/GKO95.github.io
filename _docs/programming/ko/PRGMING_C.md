---
name: C
lang: ko
layout: docs
author: GKO95
category: Programming
title: "Programming | C"
logo: "/assets/images/logo/logo-c.png"
summary: "."
order: 0x01
---
# **C: 소개**
> *참조: [Microsoft Docs C 언어 설명서 (한국어)](https://docs.microsoft.com/ko-kr/cpp/c-language/)*

C 언어는 유닉스(UNIX) 컴퓨터를 위한 소프트웨어 제작을 위해 개발된 *B* 언어의 후속작이다. 현재 C 언어는 가장 널리 사용되고 있는 프로그래밍 언어로 C++, C#, 파이썬, 자바 등 여러 프로그래밍 언어에 영향을 주었다. C 언어의 다른 프로그래밍 언어에 비해 매우 빠른 처리 속도와 훌륭한 호환성을 가지고 있어 소프트웨어 및 펌웨어 개발에 여전히 사용되고 있다.

## 컴파일 언어

프로그래밍 언어를 실행하는 방법에는 크게 두 가지로 나뉘어진다: 컴파일 언어와 인터프리트 언어이다.

인터프리터(interpreter)는 영문으로 작성된 소스 코드를 컴퓨터가 곧바로 해독하여 실행하며, 인터프리터가 있는 한 하나의 소스 코드를 서로 다른 시스템에서 동일하게 실행할 수 있는 장점을 가진다(일명 크로스 플랫폼; cross platform). 대표적인 인터프리트 언어로는 파이썬(Python)이 있다. 반면, 컴파일러(compiler)는 소스 코드를 컴퓨터 운영체제와 아키텍처에 따라 이진코드로 번역한 부산물을 생성하여 실행한다. 

C 언어는 컴파일 언어이며, 크로스 플랫폼이 지원되지 않는 단점이 있지만 컴파일러의 최적화로 인해 인터프리터보다 실행 속도가 매우 빠르다.

### 컴파일러

C 언어의 컴파일러는 국제표준기구(ISO)에서 표준을 발표한 년도에 따라 버전이 나뉘어진다. 가장 널리 사용되고 있는 버전으로는 ANSI C(일명 C89)와 C99가 있다. 본 문서는 최소한 ANSI C를 기준으로 삼아 C 프로그래밍 언어에 대하여 설명한다.

### 전처리기

전처리기(preprocessor)는 컴파일러가 소스 코드를 이진코드 컴퓨터 언어로 변역하기 전의 컴파일 작업 준비하는 역할을 이행한다. 전처리기가 수행하는 명령어는 해쉬 기호(`#`)로 표시되며, 이를 전처리기 지시문(preprocessor directive)라고 부른다.

| 전처리기 지시문 | 예시                  | 설명                                              |
| :-------------: | --------------------- | ------------------------------------------------- |
|   `#include`    | `#include <stdio.h>` | 스크립트에 헤더 파일을 추가한다.                  |
|    `#define`    | `#define SQUARE`      | 스크립트 내에서 사용할 수 있는 매크로를 정의한다. |
|    `#pragma`    | `#pragma once`        | 컴파일러에 추가적 설정을 제공한다.                |

전처리기는 C 언어를 읽지 않을 뿐더러 C 언어 문법을 따르지 않는다. 오로지 전처리기 지시문을 처리하고 주석을 없애는 등의 작업을 하여 컴파일러에 제공한다. 전처리기 지시문은 필수요소가 아니지만 프로그래밍을 더 편리하도록 한다. 전처리기는 컴파일러의 일부 중 하나이다.

# **C: 설치**

C 프로그래밍 언어로 개발하기 위해서는 C 컴파일러가 반드시 필요하며, 컴파일러 제작 회사 및 목적에 따라 종류가 다양하다. 어떤 컴파일러를 사용하는지에 따라 소스 코드를 실행 프로그램으로 컴파일하는 방식이 다를 수가 있으나, 모든 컴파일러는 동일한 ISO 표준에 따라 동작하므로 일반적인 경우에는 어떠한 컴파일러를 사용하던 상관이 없다.

통합 개발 환경(integrated development environment; IDE)은 코드 편집기 기능을 제공하며 컴파일러를 통해 실행 가능한 프로그램을 생성한다. 그러므로 본 장에서는 IDE 설치 및 초기설정 위주에 대하여 설명한다.

## 비주얼 스튜디오

[비주얼 스튜디오](https://visualstudio.microsoft.com/downloads/)(Visual Studio)는 마이크로소프트에서 개발한 윈도우 OS의 대표적인 IDE이며 MSVC 컴파일러를 제공한다. 비주얼 스튜디오는 총 세 가지의 에디션이 존재하며, 무료 버전인 커뮤니티 에디션으로도 충분하다. 통합 개발 환경인 만큼 다른 프로그래밍 언어도 함께 지원하므로 여러 종류의 구성요소를 제공한다. 그 중에서 C 프로그래밍 언어를 위해 "Desktop development with C++"를 선택한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_vs_component.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 1. 비주얼 스튜디오 C 프로그래밍을 위한 구성요소.</center>

C++ 구성요소를 선택한 이유는 C++ 컴파일러가 C 프로그래밍 언어 또한 컴파일하기 때문이다. 이러한 이유로 공식적으로 순수 C 프로그래밍 언어 구성요소가 따로 존재하지 않는다. 만일 한국어 지원을 원한다면 "Language packs" 탭에서 한국어를 함께 선택하면 된다.

비주얼 스튜디오를 실행하면 아래와 같은 시작화면이 나타난다. 새로운 프로젝트를 생성하려면 오른쪽 하단의 "Create a new project" 버튼을 클릭한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_vs_project1.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 2. 비주얼 스튜디오 시작화면.</center>

위에서 언급하였듯이 비주얼 스튜디오는 공식적으로 C 프로그래밍 언어에 대한 선택 옵션이 존재하지 않으므로, 프로젝트 생성 메뉴에서 C 프로그래밍 언어 선택은 찾을 수 없다. 그러므로 C 언어 프로젝트 생성을 위해서는 아래의 절차를 따라야 한다:

1. 프로그래밍 언어를 C++로 선택하여 "Empty Project"(빈 프로젝트)를 클릭한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_vs_project2.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 3. 비주얼 스튜디오 C 프로젝트 생성 (1단계).</center>

2. 프로젝트 및 솔루션 이름을 선정한다. 여기서 프로젝트란, 소스 코드와 컴파일러 설정 등의 실질적인 코딩 내용을 관리하는 `.vcxproj` 확장자 파일이며, 솔루션은 여러 프로젝트 파일을 하나의 폴더처럼 담는 `.sln` 파일이다. 비주얼 스튜디오에서 프로젝트는 `.sln` 파일로 열기를 권장한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_vs_project3.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 4. 비주얼 스튜디오 C 프로젝트 생성 (2단계).</center>

3. 오른쪽의 솔루션 탐색기(Solution Explorer)에서 소스 파일(Source Files)에 오른쪽 클릭하여 `추가 > 새 항목`을 클릭한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_vs_project4.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 5. 비주얼 스튜디오 C 프로젝트 생성 (3단계).</center>

4. 새 항목 추가 창에서 C++ 파일을 선택하나, 파일 이름에서 확장자를 C++ 소스 파일 확장자의 `.cpp`에서 C 소스 파일 확장자인 `.c`로 변경한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_vs_project5.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 6. 비주얼 스튜디오 C 프로젝트 생성 (4단계).</center>

단, 빈 프로젝트를 통해 추가된 소스 파일인 만큼 내부에는 어떠한 기본적인 코드가 작성되어 있지 않는다. 아래의 코드를 소스 파일에 붙여넣으며, 코드에 대한 설명은 차후 진행될 예정이다.

```c
#include <stdio.h>

int main() {
    // 여기서부터 코드 입력...
    printf("Hello, World!\n");
    return 0;
}
```

비주얼 스튜디오에서 C 언어 프로그램을 실행하는 방법에는 두 가지가 존재한다: 디버그(debug) 모드(`F5`)와 일반 실행 모드(`Ctrl+F5`)이다. 프로그램에 문제가 발생하여 하나씩 짚어보아야 할 경우 디버깅 모드를 사용하지만, 그렇지 않은 경우에는 일반 실행 모드를 사용할 것을 권장한다.

### CRT Security Warning

C Run-time Library (CRT)는 ISO C99 표준 라이브러리를 내포하고 있는 C++ 표준 라이브러리이다. 그 중에서 비주얼 스튜디오의 MSVC 컴파일러는 안정성 문제를 고려하여 일부 기능의 사용을 제한하였으며, 대신 접미사 `_s`가 붙은 더욱 안정된 기능을 제공한다. 사용이 제한된 기능을 사용하려 할 시, 안정성 경고와 관련된 `C4996` 컴파일 작업 오류이 나타난다.

CRT 안정성 경고는 흔히 C 언어 프로그래밍에 자주 목격된다. 그러나 이는 사실상 "경고"이므로 무시하고 컴파일 할 수 있으며, 아래의 코드를 입력하면 된다.

```c
#define _CRT_SECURE_NO_WARNINGS
```

## 엑스코드

[엑스코드](https://developer.apple.com/download/release/)(Xcode)는 애플에서 개발한 macOS의 대표적인 IDE이며 Clang을 기본 컴파일러로 사용한다. 엑스코드 또한 다른 프로그래밍 언어를 지원하는데, 비주얼 스튜디오와 달리 엑스코드는 C 프로그램 언어 선택 옵션이 존재한다.

엑스코드를 실행한 다음, 새로운 프로젝트를 `File > New > Project...`로 통해 생성한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_xcode_project1.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 7. 엑스코드 시작화면.</center>

본격적인 엑스코드 창이 나타나게 되는데, 애플 제품의 어플리케이션 제작에 특화되어 있으며 프로젝트 종류도 여러 가지가 있다. C 언어 프로젝트 생성을 위해서는 아래의 절차를 따라야 한다:

1. 사용하고 있는 컴퓨터가 macOS 운영체제이므로, macOS 탭에서 가장 간단한 터미널 형식의 프로그램을 위해 Command Line Tool을 선택한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_xcode_project2.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 8. 엑스코드 C 프로젝트 생성 (1단계).</center>

2. Product Name에는 프로젝트 이름을 선정하고, Language에는 C로 선택한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_xcode_project3.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 9. 엑스코드 C 프로젝트 생성 (2단계).</center>

3. 프로젝트를 저장할 경로를 고른다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_xcode_project4.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 10. 엑스코드 C 프로젝트 생성 (3단계).</center>

4. 왼쪽 패널에는 Experiment 폴더 아래에 `main.c`라는 C 소스 파일이 생성되어 있으며, 최소한의 기본 코드가 작성되어 있다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_xcode_project5.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 11. 엑스코드 C 프로젝트 생성 (4단계).</center>

엑스코드에서 C 언어 프로그램을 실행하는 방법에는 두 가지가 존재한다: 디버그(debug) 모드와 일반 실행 모드이다. 두 실행 모드는 단축키 `⌘+R` 하나로 통일되어 있으며, 실행 모드 변경은 프로젝트 설정에서 한다. 프로그램에 문제가 발생하여 검토가 필요한 경우, 관측하고자 하는 코드에 중단점(breakpoint)을 설정하여 디버깅을 한다. 활성화된 중단점을 모두 비활성화하여 프로그램을 일반적으로 실행하기 위해서는 단축키 `⌘+Y`로 중단점 활성화 토글을 한다.

## 터미널

리눅스 OS는 기본적으로 gcc 컴파일러가 설치되어 있으나, 위의 비주얼 스튜디오와 엑스코드를 사용할 수 없다. IDE는 컴파일에 반드시 필요한 요소가 아니며, 터미널에서도 컴파일 작업이 가능하다. 최근에는 라즈베리파이와 같은 단일 보드 컴퓨터(single-board computer; SBC)를 사용한 팀 프로젝트가 많아져, 본 내용과 같은 리눅스 사용법은 큰 도움이 될 수 있다.

간단한 예시를 보여주기 위해, *그림 11. 엑스코드 C 프로젝트 생성 (4단계)*에 나온 코드를 그대로 가져와 `main.c`라는 소스 파일에 저장하였다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" style="display:block" src="./../../../assets/images/docs/C/c_gcc_project1.png" width="100%"></div><center style="font-weight: bold;">그림 12. gcc 컴파일 작업 예시 코드.</center>

위의 `main.c` 소스 파일은 `~/Workspace/C/Experiment` 경로에 저장되었다고 하자.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_gcc_project2.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 13. gcc 컴파일러의 C 언어 프로그램 생성 (1단계).</center>

터미널을 실행하여 소스 파일이 위치한 경로로 이동한다. 터미널에서 경로 이동은 `cd` 명령어를 사용한다. 소스 파일을 컴파일하기 위해서는 아래의 명령어를 입력한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_gcc_project3.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 14. gcc 컴파일러의 C 언어 프로그램 생성 (2단계).</center>

본 명령어을 해석하면 `main.c` 소스 파일을 컴파일하여 이진 파일을 생성(`-o`)하는데, 생성된 이진 파일 이름은 `main`이라고 지정한다는 의미이다. 해당 예시는 gcc 컴파일러의 매우 간단한 예시 중 하나이며, 프로젝트 성질에 따라 외부 라이브러리 링크와 관련된 옵션도 추가할 수 있다.

소스 파일이 위치한 폴더를 다시 한 번 확인하면 컴파일로 생성된 `main` 이진 파일을 확인할 수 있다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_gcc_project4.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 15. gcc 컴파일러의 C 언어 프로그램 생성 (3단계).</center>

이진 파일 `main`을 실행하기 위해서는 터미널에서 `./`와 함께 실행 파일 이름을 입력한다.

<div style="background-color:white; border:solid 3px #808e95; text-align: center; border-radius:0.5em;"><img class="-tv-ignore-access" src="./../../../assets/images/docs/C/c_gcc_project5.png" style="display:block" width="100%"></div><center style="font-weight: bold;">그림 16. gcc 컴파일러의 C 언어 프로그램 생성 (4단계).</center>

여기서 `./`은 현재 경로를 의미한다. 현재 경로를 표시하는 구문이 없으면 리눅스 터미널은 `main`이란 파일과 전혀 연관이 없는 환경 변수에서 찾으려고 하며, 결국 파일을 찾지 못해 실행하지 못한다.

# **C: 기초**

각 프로그래밍 언어마다 준수되어야 할 규칙과 기반이 되는 데이터들이 존재한다. 이를 어길 시에는 프로그램에 오류가 발생하거나 정상적인 동작을 보장할 수 없다. 실질적인 프로그래밍에 있어, 본 장에서는 C 프로그램 코딩에 기초적인 정보 제공을 목표로 한다.

## 헤더 파일

헤더 파일(header file)은 데이터 혹은 기능의 존재를 알리는 역할을 하며 `.h` 확장자를 가진다. 통상적으로 헤더 파일은 동일한 이름의 소스 파일과 짝을 이루며, 소스 파일에서 작성된 데이터와 코드를 헤더 파일로 통해 다른 소스 파일에서도 사용할 수 있도록 한다.

프로그래밍 언어에서 흔히 사용되는 데이터와 기능들은 바로 사용할 수 있도록 미리 컴파일되어 있다. 이를 표준 라이브러리(standard library)라고 하며, 아래의 헤더 파일는 일부 표준 라이브러리를 소스 파일에 사용하게 한다.

| 헤더 파일 | 구문                | 설명                                                      |
|:------------:| --------------------- | ------------------------------------------------------------ |
| `stdio`      | `#include <stdio.h>`  | 표준 입출력 함수를 정의한다:<br />`printf()`, `scanf()` |
| `stdlib`     | `#include <stdlib.h>` | 메모리 할당, 예외처리와 같은 여러 기능을 정의한다:<br />`rand()`, `malloc()` |
| `math`       | `#include <math.h>`   | 수학적 계산 관련 함수를 정의한다:<br />`exp()`, `cos()` |
| `time`       | `#include <time.h>`   | 날짜 및 시간 처리 함수를 정의한다:<br />`time()`, `clock()` |

소스 파일에 헤더 파일을 불러오는 방식에는 두 가지가 존재하며, 홑화살괄호(`<>`)와 큰 따옴표(`""`)가 있다.

```c
#include <stdio.h>
#include "header.h"
```

이 둘은 전처리기가 헤더 파일을 어느 위치에서 찾을 것인지 차이점을 가진다.

* `#include <header.h>`
    : 컴파일러 혹은 IDE에서 지정한 경로를 위주로 헤더 파일을 찾으며, 일반적으로 시스템 헤더 파일에 사용된다.
* `#include "header.h"`:
    : 현재 소스 파일이 위치한 경로를 위주로 헤더 파일을 찾는다. 만일 찾지 못하였을 시, ` #include <header.h>`와 같이 지정된 경로에서 헤더 파일을 재탐색한다. 일반적으로 사용자 정의 헤더 파일에 사용된다.

### 컴파일된 헤더
컴파일된 헤더(precompiled header)는 컴파일러에서 더 빠른 속도로 처리할 수 있도록 중간체 형태로 컴파일된 헤더 파일이다. 컴파일 시간을 줄일 수 있는 장점을 가져 수많은 헤더 파일을 가진 프로젝트 혹은 큰 용량을 가진 헤더 파일에 효율적이다.

하지만 컴파일된 헤더를 사용하면 컴파일 작업 자체에는 시간이 다소 걸리는 단점이 있다. 그러므로 용량이 작은 프로젝트나 자주 수정을 해야 하는 헤더 파일이 있다면 컴파일된 헤더 파일은 오히려 비효율적이다. 

| 컴파일된 헤더 | 컴파일러                              |
|:------------------:| ------------------------------------- |
| `stdafx.h`         | 비주얼 스튜디오 2015 (msvc14) 혹은 이전 버전 |
| `pch.h`            | 비주얼 스튜디오 2017 (msvc15) 혹은 이후 버전 |

## 문장 종단자
프로그래밍에서 문장(statement)이란, 실질적으로 무언가를 실행하는 코드를 의미한다. C 언어에서는 모든 문장의 끝에는 항상 문장 종단자(statement terminator)가 위치해야 하며 세미콜론(`;`) 기호를 사용한다.

많은 프로그래밍 입문자가 가장 많이 저지르는 실수 중 하나로 문장 종단자를 잊어버리고 컴파일을 진행하는 것이다. 그러므로 C 기반 언어(C++과 C# 포함)에는 세미콜론을 넣는 것을 습관화해야 한다.

## 주석

주석(comment)은 프로그래밍에 있어 실행되지 않는 부분이며, 흔히 어떠한 정보를 간략히 스크립트 내에 입력하는데 사용된다. C 언어에는 두 가지의 주석이 존재하며, 이들은 각각 "한줄 주석"과 "블록 주석"이라 부른다.

* **한줄 주석**
    : 코드 한 줄을 차지하는 주석이며, 두 개의 슬래시(`//`)로 표시된다.
* **블록 주석**
    : 코드 여러 줄을 차지하는 주석이며, 한 쌍의 슬래시와 별표(`/* */`)로 표시된다.

```c
/*
블록 주석:
코드 여러 줄을 차지하는 주석이다.
*/  
// 한줄 주석: 코드 한 줄을 차지하는 주석이다.
```

## 입력 & 출력

C 언어는 다음과 같은 텍스트 기반의 입력 및 출력 함수를 가진다. 아래는 출력 함수를 우선적으로 나열였다.

| 출력      | 구문                            | 설명                                                  |
|:-----------:| --------------------------------- | ------------------------------------------------------------ |
| `putchar()` | `putchar('A');`                   | 문자 하나를 터미널에 출력한다.                      |
| `puts()`    | `puts("Text");`                   | 일련의 문자들(일명 문자열)을 터미널에 출력하며, 자동 줄바꿈이 된다. |
| `printf()`  | `printf("format", var);`          | 일련의 문자들(일명 문자열)을 터미널에 출력하며, 형식 지원이 된다. |
| `fprintf()` | `fprintf(stream, "format", var);` | 출력 함수 `printf()`의 확장된 개념으로, `stream`에서 스트림 선택이 가능하다. 여기서 `printf(...)`는 `fprintf(stdout, ...)`와 동일하며, `stdout`는 *표준 출력 스트림*을 의미한다. |

```c
// "putchar()" 출력 함수
putchar('A');

// "puts()" 출력 함수
puts("Hello World!");

// "printf()" 출력 함수
float variable = 3.14159;
printf("variable: %.2f", variable);
```

```
AHello World!
variable: 3.14
```

출력 함수와 마찬가지로, 터미널을 통해 데이터를 받는 입력 함수에도 여러 종류가 존재한다.

| 입력       | 반환                        | 설명                                                  |
|:-----------:| ----------------------------- | ------------------------------------------------------------ |
| `getchar()` | 문자                     | 맨 앞에 있는 문자를 입력으로 받는다.                      |
| `gets()`    | 문자열 (일명 문자 배열) | 일련의 문자(일명 문자열)을 입력으로 받는다.    |
| `scanf()`   | 지정 형식               | 지정된 형식에 맞게 입력을 받는다. 문자열을 제외한 입력을 받을 모든 데이터는 주소 연산자(`&`)가 필요하다. |

```c
// "getchar()" 입력 함수
char variable1;
variable1 = getchar();

// "gets()" 츨력 함수
char variable2[20];
gets(variable2);

// "scanf()" 출력 함수
float variable3; char variable4[10];
scanf("%f %3s", &variable3, variable4);
```

```
A
>>> variable1 = 'A'

Hello World!
>>> variable2 = "Hello World!"

3.0 Program
>>> variable3 = 3.000000
>>> variable4 = "Pro"
```

### 형식 지정자

형식 지정자(format specifier)는 입출력 함수에서 데이터를 어떻게 받아들일 것인지 지정한다. 그러나 형식 지정자가 `scanf()` 입력 함수에서 사용되는지, 혹은 `printf()` 출력 함수에서 사용하는지에 따라 데이터는 달리 처리된다.

* 입력 측에서 형식 지정자를 사용하면 본래 데이터의 성질이나 값이 변한다. 대표적인 예로 일련의 문자에서 원하는 부분만 추출한 작업이 있다(`Program`에서 `Pro`만 추출).

* 출력 측에서 형식 지정자를 사용하면 본래 데이터의 성질과 값은 그대로 유지되나, 어떻게 표시되는지만 달라진다. 대표적인 예로 소수점 버림 작업이 있다(`3.14159`에서 `3.14`로 소수 두 자리만 표시).

```c
int variable;
printf("입력: ");
scanf("%5d", &variable);

printf("%3d", variable);
```

```
입력: 1234567
12345            // 지정된 "%3d" 형식에 따라 "123"이라고 표시되지 않는다.
```

| 형식   | 설명       |
|:----:|----------|
| `%d` | 정수 (십진수) |
| `%f` | 부동소수점수   |
| `%c` | 문자       |
| `%s` | 문자열      |
| `%x` | 십육진수     |
| `%p` | 포인터  |

> 위의 예시에서의 `%3d` 형식은 앞 혹은 뒤의 세 자리만 추출하는 게 아니며, 숫자 3은 오히려 최소 표시 자릿수를 의미한다. 즉, 형식 지정자가 `%7d`이었으면 `0012345`로 최소 일곱 자리로 정수를 표시한다.

## 식별자
식별자(identifier)는 프로그래밍을 구성하는 데이터(일명 구성체; construct)를 구별하기 위해 사용되는 명칭이다. 다시 말해, 식별자는 개발자가 데이터에 직접 붙여준 이름이다. C 언어에서 식별자를 선정하는데 아래의 규칙을 지켜야 한다.

* 오직 영문, 숫자, 밑줄(`_`)만 허용된다.
* 첫 문자는 숫자로 시작할 수 없다.
* 공백은 허용되지 않는다.

## 자료형
자료형은 프로그래밍에서 자료 형식과 바이트 크기를 결정하는 매우 중요한 구성요소 중 하나이다. 자료형에 따라 프로그램의 메모리 및 처리속도에 효율을 보여줄 수 있다. 아래는 C 프로그래밍 언어가 가지는 자료형이다.

| 식별자 | 자료형              | 설명                                                  |
|:----------:| ---------------------- | ------------------------------------------------------------ |
| `int`      | 정수                | 32비트 단정도 정수.<br />크기: 4 바이트         |
| `float`    | 부동소수점수  | 소수점을 포함한 실수.<br />크기: 4 바이트          |
| `double`   | 배정도 부동소수점수 | 배의 메모리를 가진 배정도 실수.<br />크기: 8 바이트  |
| `char`     | 문자: `''`        | 단일 문자: `'A'` 및 `'?'`.<br />크기: 1 바이트  |
| `bool`     | 논리형                | 논리의 참과 거짓을 `true`(0이 아닌 정수)와 `false`(정수 0)로 표시.<br />크기: 1 바이트 |
| `void`     | 보이드                   | 불특정 자료형.<br />크기: 1 바이트                    |

### `sizeof()` 함수

`sizeof()` 함수는 자료형이나 데이터가 차지하고 있는 메모리 용량을 확인하기 위해 사용하며, 단위는 바이트(byte)이다.

```c
sizeof(int);        // 크기: 4 바이트
sizeof(char);       // 크기: 1 바이트
```

## 변수
변수(variable)는 할당 기호(`=`)를 사용하여 데이터를 할당할 수 있는 저장공간이다. C 언어의 변수는 자료형이 정해져 있으며, 해당하는 자료형 데이터만 할당받을 수 있다. 

아래의 예시는 `variable`이란 식별자를 가진 변수가 정수 자료형만 할당받을 수 있는 존재임을 컴파일러에게 알리는 동시에 메모리 할당을 통해 데이터를 가지는데, 이를 프로그래밍에서는 *정의(definition)*이라고 부른다.

```c
/* 변수 "variable"의 정의 */
int variable = 3;
```

만일 데이터 할당이 이루어지지 않고 컴파일러에게 변수의 존재만 알리면 *선언(declaration)*이라고 부른다.

```c
/* 변수 "variable"의 선언 */
int variable;
```

[C++ ISO 표준](https://www.iso.org/standard/68564.html)에 의하면 일반적인 변수의 경우 **선언은 정의**이며, 그에 대한 내용은 § 3.1.2 부문을 그대로 복사한 아래를 참고한다(영문).

> A declaration is a definition unless it declares a function without specifying the function’s body (8.4), it contains the extern specifier (7.1.1) or a linkage-specification25 (7.5) and neither an initializer nor a function- body, it declares a static data member in a class definition (9.2, 9.4), it is a class name declaration (9.1), it is an opaque-enum-declaration (7.2), it is a template-parameter (14.1), it is a parameter-declaration (8.3.5) in a function declarator that is not the declarator of a function-definition, or it is a typedef declaration (7.1.3), an alias-declaration (7.1.3), a using-declaration (7.3.3), a static_assert-declaration (Clause 7), an attribute- declaration (Clause 7), an empty-declaration (Clause 7), a using-directive (7.3.4), an explicit instantiation declaration (14.7.2), or an explicit specialization (14.7.3) whose declaration is not a definition.

위의 표준은 C++에 비롯되지만, C 프로그래밍 언어만을 고려하였을 때 아래의 네 가지 선언들은 정의가 아닌 것으로 정리된다.
* 함수 전방선언
* 함수 매개변수 선언
* `extern` 키워드 선언
* `typedef` 선언

실제로 위의 변수를 출력하면 값이 반환되는 것을 보아 할당은 되지 않았으나 데이터를 가지고 있음을 확인할 수 있다. 한 번 정의된 변수는 컴파일러가 어떠한 데이터 종류를 할당받을 수 있는지 알고 있으므로 더이상 자료형을 표시할 필요가 없다. 또한 모든 프로그래밍 언어는 할당 연산자를 기준으로 왼쪽에는 피할당자(변수), 오른쪽에는 할당자(데이터 혹은 변수)를 놓는다. 반대로 위치시키면 오류가 발생하거나 원치 않는 결과가 도출될 수 있다.

### 초기화

초기화(initialization)란, 변수의 첫 데이터 할당(assignment)을 가리키며 일반적으로 정의 과정에서 이루어진다.

```c
/* 변수의 초기화 */
int variable = 3;
```

위와 같은 예시 코드로 인해 통상적으로 정의를 "선언 + 초기화"로 보는 경향이 많지만, 이는 매우 잘못된 견해이다. 이전에도 언급한듯이 일반적으로 선언은 하나의 정의로써 아래의 예시 코드도 변수의 정의가 된다. 그러나 데이터 할당이 없어 초기화는 이루어지지 않았다.

```c
/* 변수의 정의; 그러나 초기화 X */
int variable;
```

### 지역 변수 & 전역 변수

C 언어에는 크게 세 종류의 변수로 나뉘어진다.

* **지역 변수(local variable)**는 함수(function)와 같은 코드 블록 내부에서 정의된 변수이다. 지역 변수에 저장된 데이터는 코드 블록 밖에서는 소멸되므로 외부에서 사용할 수 없다. 그러므로 지역 변수는 외부에서 정의된 변수의 이름을 가질 수 있다.

  ```c
  int main() {
      // 여기서부터 코드 입력...

      /* 지역 변수 */
      int variable;

      return 0;
  }
  ```

* **전역 변수(global variable)**는 함수와 같은 코드 블록 속하지 않은 외부에 정의된 변수이며, 전역 변수는 특별한 키워드가 필요없이 호출만으로도 코드 블록 내의 지역 변수와 함께 사용할 수 있다. 단, 변수의 충돌로 인한 예상치 못한 결과와 오류를 방지하기 위해 가급적 전역 변수의 사용은 피하도록 한다.

  ```c
  /* 전역 변수 */
  int variable;

  int main() {
      // 여기서부터 코드 입력...

      return 0;
  }
  ```

* **정적 변수(static variable)**는 특수한 지역 변수로 프로그램이 종료되지 않는 한 함수와 같은 코드 블록을 탈출하여도 데이터가 소멸되지 않고 보존된다. 그러므로 해당 코드 블록을 재실행하면 탈출 직전의 데이터를 이어서 사용할 수 있다. 정적 변수는 `static` 키워드로 정의한다.

  ```c
  int main() {
      // 여기서부터 코드 입력...

      /* 정적 변수 */
      static int variable;

      return 0;
  }
  ```

### 상수
상수(constant)는 초기화 이후 변경할 수 없는 특별한 변수이다. 상수는 `const` 키워드를 통해 정의한다.

```c
/* 상수 정의 */
const int variable = 1;
```

## 자료형 변환
자료형 변환은 변수 혹은 데이터의 자료형을 다른 자료형으로 강제로 바꾸는 작업이다. 만일 유사한 자료형을 작은 크기에서 큰 크기로 변환할 시, 이를 *암시적* 자료형 변환이라고 한다. 암시적 자료형 변환은 데이터 손실이 없기 때문에 컴파일러에서 자연적으로 처리된다.

```c
short A = 1;    // 2 바이트 정수형
int B = A;      // 4 바이트 정수형
```

이에 반대되는 *명시적* 자료형 변환(일명 캐스트; cast)은 데이터 손실의 위험을 감수하며 데이터의 자료형을 바꾼다. C 언어 형식의 캐스팅은 아래와 같이 소괄호(`()`)를 활용한다.

```c
float A = 1.9;  // 4 바이트 부동소수점
int B = (int)A; // 4 바이트 정수형 - 완전 호환 불가: 정수 부분만 반환된다.
```

```
1
```

## 연산자
연산자(operator)는 피연산자의 데이터를 조작할 수 있는 가장 간단한 데이터 처리요소이다. 연산자는 피연산자의 접두부, 접미부, 혹은 두 데이터 사이에 위치시켜 사용한다.

### 산술 연산자
산술 연산자(arithmetic operator)는 숫자 자료형을 처리하는 데 집중한다. 다음은 숫자 자료형에 사용되는 산술 연산자의 목록이다.

|             이름             | 연산자 | 설명                                                  |
| :--------------------------: |:--------:| ------------------------------------------------------------ |
|           덧셈           | `+`      | -                                                            |
|         뺄셈          | `-`      | -                                                            |
|        곱셈        | `*`      | -                                                            |
|           나눗셈           | `/`      | 두 피연산자가 정수일 경우: 정수형 몫만 반환된다.<br/>피연산자 중 실수가 있을 경우: `float` 혹은 `double` 실수로 반환된다. |
| 나머지 (모듈로 연산) | `%`      | 나눗셈의 나머지를 정수형으로 반환한다.                              |
    
산술 연산을 쉽게 읽을 수 있도록 숫자 사이에 공백을 넣어도 된다. 이 공백은 숫자나 산술 연산에 아무런 영향을 주지 않는다.

### 할당 연산자
할당 연산자(assignment operator)는 숫자 자료형에 사용되는 또다른 연산자이다. 이에 대한 설명은 아래의 도표를 참고한다.

| 연산자 | 예시  | 동일  |
|:--------:| -------- | ----------- |
| `+=`     | `x += 1` | `x = x + 1` |
| `-=`     | `x -= 1` | `x = x - 1` |
| `*=`     | `x *= 1` | `x = x * 1` |
| `/=`     | `x /= 1` | `x = x / 1` |
| `%=`     | `x %= 1` | `x = x % 1` |

비록 할당 연산자는 아니지만, 이와 유사한 증감 연산자(increment & decrement)는 C 기반 언어에서 다음과 같은 표현식을 의미한다.

| 연산자    | 예시   | 설명       |
| ----------- | --------- | ----------------- |
| `++` 접두사 | `x = y++` | `x = y; y = y+1;` |
| `++` 접미사 | `x = ++y` | `y = y+1; x = y;` |
| `--` 접두사 | `x = y--` | `x = y; y = y-1;` |
| `--` 접미사 | `x = --y` | `y = y-1; x = y;` |

### 비교 연산자
비교 연산자(relational operator)는 두 데이터 간의 비교 조건을 확인하며, 이에 대한 결과로 참(`true`) 혹은 거짓(`false`) 논리값을 반환한다. 비교 연산자는 아래의 도표에서 확인할 수 있다.

| 미만 | 이하 | 동일 | 상이 | 이상 | 초과 |
|:----:|:----:|:----:|:----:|:----:|:----:|
| `<`  | `<=` | `==` | `!=` | `>=` | `>`  |

### 논리 연산자
논리 연산자(logical operator)에는 논리곱, 논리합, 그리고 보수가 있다. 논리 연산자를 사용할 시, `true`와 `false` 논리값을 각각 이진수의 1과 0으로 간주하면 된다.

| 연산자 | 논리 | 설명                                                |
|:--------:| ----- | ---------------------------------------------------------- |
| `&&`     | 논리곱   | 모든 인수가 `true`이면 `true`이고, 그렇지 않으면 `false`이다.    |
| `||`     | 논리합    | 하나 이상의 인수가 `true`이면 `true`이고, 그렇지 않으면 `false`이다. |
| `!`      | 보수   | `true`를 `false`로 변경 혹은 `false`를 `true`로 변경한다.                   |

### 탈출 문자
탈출 문자(escape character)는 백슬래시 기호(`\`)를 사용하며, 문자열로부터 탈출하여 텍스트 데이터 내에서 특정 연산을 수행하도록 한다. 아래는 탈출 문자 중에서 흔히 사용되는 줄바꿈(`\n`)이다.

```c
printf("Hello\nWorld!!");
```

```
Hello
World!
```

| 구문 | 설명           |
|:----:| -------------- |
| `\n` | 줄바꿈       |
| `\t` | 탭 |
| `\\` | 백슬래시      |
| `\b` | 백스페이스      |
| `\'` | 작은 따옴표    |
| `\"` | 큰 따옴표      |

# **C: 조건 및 루프**
조건문 및 반복문(혹은 루프문)은 프로그래밍에 가장 흔히 사용되는 코드 문장(statement) 중 하나이다. 여기서 문장이란, 실질적으로 무언가를 실행하는 코드를 의미한다. 본 장에서는 C 프로그래밍의 조건에 따라 실행하는 조건문(conditional statement)과 반복적으로 실행하는 반복문(loop statement)을 소개한다.

## `if` 조건문
`if` 조건문은 조건이 참일 경우 코드를 실행한다. 조건이 `true`일 때 문장이 수행되지만 그렇지 않으면 무시된다.

```c
if (condition)
{
    statements;
}

// 간략화된 문장
if (condition) statement;
```

`if` 조건문 안에 또다른 `if` 조건문을 넣을 수 있으며, 이를 *네스티드(nested)* `if` 조건문이라고 부른다. 이러한 경우, 코드 블록(`{}`)을 사용하여 두 `if` 조건문의 경계를 명확히 구별하기를 권장한다.

```c
if (condition)
{
    if (condtion)
    { 
        statements;
    } 
}
```

### `else` 조건문
`else` 조건문은 단독으로 사용될 수 없으며 반드시 `if` 조건문 이후에 사용되어야 한다. 실행문에는 조건부가 `false`로 평가되었을 경우 호출되는 코드가 포함되어 있다.

```c
if (condition)
{
    statements;
}
else
{
    statements; 
}
```

### `else if` 조건문
`else if` 조건문은 `else`와 `if` 조건문의 조합으로 첫 번째 조건이 거짓일 경우, 첫 번째 조건과 다른 새로운 조건을 제시한다.

```c
if (condition)
{
    statements;
}
else if (condition)
{
    statements;
}
else
{
    statements;
}
```

하지만 우선 소개된 `else`-`if` 연쇄 조건문은 두 조건부가 함께 사용되는 점과 비교해 `else if` 조건문은 여전히 하나의 조건부에서 처리되므로, 이 둘은 구체적으로 서로 다른 조건문임을 명시해야 한다.

### 조건 연산자
조건문은 아래와 같이 조건 연산자(ternary operator; `?:`)를 사용하여 간략히 표현될 수 있다.

```c
condition ? true_return : false_return;
```

조건 연산자는 영어로 *ternary operator*로, 이는 세 가지 인수를 사용하는 것을 의미한다. 조건 연산자는 가독성을 감소시키므로 과용해서는 안되지만 변수 할당에는 유용하다.

## `switch` 조건문
`switch` 조건문은 건네받은 데이터를 `case` 키워드에서 제공하는 값과 일치하는지 비교하며, 참일 경우 코드를 실행한다. 참 조건 이후, 더 이상의 조건 평가를 방지하기 위해 모든 `case` 키워드에는 `break`라는 탈출문이 필요하다.

모든 경우에 조건이 부합하지 않을 시, `default` 키워드에 연동된 문장이 실행되며, `switch` 조건문에는 반드시 있어야 한다. 그러나 `case` 키워드와 달리 `break` 탈출문을 필요로 하지 않는다.

```c
switch (argument)
{
    case value1:
        statements;
        break;
    case value2:
        statements;
        break;
    default:
        statements;
}
```

`switch` 조건문은 복수의 경우가 하나의 실행문을 공유할 수 있다.

```c
switch (argument)
{
    case value1:
    default:
        statements;
        break;
    case value2:
    case value3:
        statements;
        break;
    case value4:
        statements;
        break;
}
```

### `break` 문
`break` 문(일명 탈출문)은 반복이 완료되기 전에 루프를 조기 종료하는데 사용된다. 루프 내부에서 탈출문을 마주치는 즉시 현재 루프에서 탈출하지만 그 바깥 루프로부터는 탈출하지 않는다.

### `continue` 문
`continue` 문은 반복문 내에서 나머지 실행문을 전부 건너뛰고 다시 조건 판정부분으로 돌아가게 한다. 이는 반복문을 종료하는 `break` 문과 달리 반복문의 루프를 유지한다.

## `while` 반복문
`while` 반복문은 조건이 유지되는 한 내부 코드를 반복적으로 실행한다. 조건이 `false`임이 판정되면 반복문을 종료한다.

```c
while (condition)
{
    statements;
}

// 간략화된 문장
while (condition) statement;
```

### `do`-`while` 반복문
`do`-`while` 반복문은 `while` 반복문과 유사한다. 그러나 후자는 조건을 먼저 확인하고 문장을 실행하였으면, 전자는 문장을 우선 실행하고 조건을 확인한다.

```c
do
{
    statements
} while (condition);
```

## `for` 반복문
`for` 반복문은 정의된 지역 변수가 조건에 만족하는 한 지속적으로 반복한다. 한 번 반복할 때마다 지역 변수에는 반복문에 명시된 대로 변화가 발생하며, 일반적으로 정수형 증감을 사용한다.

```c
for (variable; condition; increment) {
    statements;
}

// 간략화된 문장
for (variable; condition; increment) statement;
```

# **C: 배열**
C 언어는 여러 데이터를 하나의 변수에 저장하는 배열(array)을 생성할 수 있다. 배열은 여러 데이터를 한 번에 관리하는 편리성을 제공한다. 배열은 *포인터*와 밀접한 관계가 있으며, 이에 대해서는 차후 설명할 예정이다. 본 장에서는 포인터 언급을 최소화하며 배열에 대하여 설명할 것이다.

## 배열
배열(array)은 동일한 자료형의 데이터를 순번대로 담는 저장공간이다. 배열을 정의할 시, 대괄호(`[]`) 안에는 얼마나 많은 데이터를 담을 수 있는지 용량을 정해야 한다.

```c
/* 배열 정의 */
int arr[size];
```

단, 배열 용량을 결정할 때는 변수를 사용할 수 없다(상수 변수 제외). 이는 배열의 크기는 정적이며, 정의 이후 크기를 줄이거나 늘릴 수 없다는 의미이다.

배열의 초기화는 중괄호(`{}`)를 사용하여 데이터를 순번에 맞게 배열 요소에 할당한다.

```c
/* 배열 초기화 1 */
int arr[size] = {value1, value2, ... };

/* 배열 초기화 2: 배열 용량을 지정하지 않은 채 초기화하면, 배열 크기는 데이터 개수만큼이다. */
int arr[] = {value1, value2, ... };
```

초기화가 이루어질 시, 할당되는 데이터 개수는 정의된 배열 용량을 초과해서는 안된다. 그렇지만 데이터 개수가 용량을 미치지 못할 경우 나머지 요소에는 `0` 혹은 `NULL` 값이 할당된다.

배열 자체를 호출하면 할당된 데이터를 불러오지 않으며, 그 대신 배열이 저장된 메모리 주소(즉, 포인터)가 반환된다. 여기서 배열의 메모리 주소는 첫 번째 요소의 주소와 일치하며, 바로 옆 메모리 주소에는 다음 요소가 연쇄적으로 할당되어 있다.

```c
int arr[3] = {value1, value2, valu3};

arr;        // >> 출력: 0x0139F854
&arr[0];    // >> 출력: 0x0139F854
&arr[1];    // >> 출력: 0x0139F858 ( = 0139F854 + 정수형 4 바이트)
```

자세한 내용은 차후 *C: 포인터* 장에서 다루게 될 것이므로, 지금으로써는 이러한 개념이 있다는 정도로만 이해하면 된다.

위에서 설명한 배열의 특징으로 인해, 배열은 초기화 이외에는 한꺼번에 할당이 불가능하다. 그렇지만 각 요소당 할당은 가능하며, 요소 순번은 0번부터 시작하며 대괄호(`[]`)로 호출한다.

```c
int arr[3];

/* 배열의 개별 요소 할당 */
arr[0] = value1;
arr[1] = value2;
arr[2] = value3;
```

### 배열의 크기
`sizeof()` 함수가 배열에 사용되면 배열의 크기가 아닌, 배열이 차지하는 총 바이트 수를 반환한다. 이는 배열의 자료형과 직접적인 영향이 있으므로, 배열의 크기를 구하기 위해서는 다음과 같은 표현식을 사용한다.

```c
int arr[3];

sizeof(arr)/sizeof(int);    // >> 출력: 3 ( = 배열의 크기)
```

즉, 자료형의 요소들로 구성된 배열을 해당 자료형으로 나누면 요소의 개수가 계산된다.

### 다차원 배열

배열은 또다른 배열을 요소로 가질 수 있으나, 이들은 모두 동일한 자료형과 배열 크기를 가져야 한다. 비록 국한적이지만, 일반 배열과 마찬가지로 다차원 배열의 첫 번째 차원은 초기화할 시 크기를 지정하지 않아도 된다.

```c
/* 다차원 배열의 초기화 1 */
int arr[size1][size2] = { {value11, value12, ... }, {value21, value22, ...}, ... };

/* 다차원 배열의 초기화 2 */
int arr[][size2] = { {value11, value12, ... }, {value21, value22, ...}, ... };
```

## 문자열

C 언어는 일련의 문자들, 일명 문자열(string)을 자체적으로 자료형으로 지원하지 않는다. 하지만 이를 문자들과 널 문자(`\0`)로 구성된 배열로 문자열을 표현할 수 있다.

```c
/* C-형식 문자열 */
char arr[] = "Hello";    // 즉, arr[] = {'H', 'e', 'l', 'l', 'o', '\0'};
char* ptr = "World!";    // 포인터를 활용한 문자열 표현 방법
```

아래는 C 언어에서 문자열과 관련된 함수들의 목록이다.

| 함수   | 예시               | 설명                                                  |
|:----------:| --------------------- | ------------------------------------------------------------ |
| `strcat()` | `strcat(str1, str2);` | 문자열 `str2`를 문자열 `str1` 뒤에 덧붙인다.   |
| `strcpy()` | `strcpy(str1, str2);` | 문자열 `str2`을 문자열 `str1`에 복사한다.                |
| `strlen()` | `strlen(str);`        | 문자열 `str` 크기를 반환하며, 이때 널 문자는 제외된다. |

# **C: 함수**
C 언어는 하나의 핵심 함수인 `main()`을 기점으로 모든 프로그램이 실행된다. 함수에 대한 이해는 매우 중요하며, 직접 함수를 제작하고 필요할 때마다 사용하여 효율성을 높일 수 있는데, 이러한 프로그래밍 기법을 *함수형 프로그래밍(functional programming)*이라고 한다. 본 장은 C 언어에서 사용자 정의 함수의 생성 및 사용 방법에 대하여 소개한다.

## 함수
함수(function)는 독립적인 코드 블록으로써 데이터를 처리하며, 재사용이 가능하고 호출 시 처리된 데이터를 보여주어 유동적인 프로그램 코딩을 가능하게 한다.

함수는 이름 뒤에 소괄호가 있는 `function()` 형식으로 구별된다.

```c
int variable = {0, 3, 5, 9};
printf(sizeof(variable));
// "printf()" 함수, 그리고 바이트 용량을 반환하는 "sizeof()" 함수
```

함수의 기능을 정의(definition)하기 위해서는 두 가지의 구성요소가 반드시 필요하다:
* 코드 블록(`{}`): 함수를 호출할 때, 실행되는 코드가 들어있다.
* 자료형: 함수가 종료될 때, 반환되는 데이터의 자료형을 결정한다. 

```c
/* 함수 정의 */
int function()
{
    return 1 + 2;
}

/* 함수 호출 */
function();    // >> 출력: 3
```

C 언어는 위에서부터 순차적으로 코드가 실행되기 때문에, 아직 정의가 되지 않은 상태에서 함수를 호출할 수 없다. 이를 고려하여 모든 함수의 정의를 스크립트 맨 위에 위치시키면 가독성이 저하되고 관리하기 매우 힘들어질 수 있다.

함수 프로토타입(prototype), 일명 전방선언(forward declaration)은 컴파일러에게 미리 함수의 존재를 알리는 선언 역할을 하지만, *C: 기초 § 변수*에서 언급한대로 함수의 선언은 함수의 정의와 전혀 다른 존재이다. 프로토타입은 필수요소는 아니지만 대체로 스크립트의 상단부에 위치하며, 함수 정의 구문에서 코드 블록(`{}`)을 세미콜론(`;`)으로 대체하면 된다.

```c
/* 함수 프로토타입 */
int function();

/* 함수 호출 */
function();    // >> 출력: 3

/* 함수 정의 */
int function()
{
    return 1 + 2;
}
```

그러나 함수 내에서 또다른 함수를 정의하는 것은 C 언어에서 허용되지 않는다.

### `return` 반환문
`return` 반환문은 함수로부터 데이터를 함수에 지정된 자료형으로 반환하는 함수 전용 문장이다. 반환문이 실행되면 코드가 남아 있음에도 불구하고 함수는 즉시 종료된다. 

만일 함수의 자료형이 `void`이면 반환문은 필요가 없으나, 조기 종료를 위해 아무런 데이터를 반환하지 않는 `return;`을 사용할 수 있다.

### 매개변수 & 전달인자

다음은 함수에 대해 논의할 때 중요하게 언급되는 매개변수와 전달인자의 차이에 대하여 설명한다.

* **전달인자 (argument)**
    : 전달인자, 혹은 간략하게 "인자"는 함수로 전달되는 데이터이다.
* **매개변수 (parameter)**
    : 매개변수는 전달인자를 할당받는 함수 내의 지역 변수이다. 그러므로 매개변수는 함수 외부에서 호출이 불가능하다. 매개변수의 정의은 함수의 소괄호(`()`) 내에서 이루어진다.

매개변수와 전달인자는 개념적으로 다른 존재이지만, 동일한 데이터를 가지고 있는 관계로 흔히 두 용어는 혼용되어 사용하는 경우가 많다.

| 연산자 |    구문    | 설명                                                 |
| :------: | :----------: | ------------------------------------------------------------ |
|   `=`    | `arg=value` | 매개변수에 전달인자가 없으면 기본값 `value`가 대신 반환된다. 반드시 일반 매개변수 뒤에 위치해야 한다. |

아래의 예제는 함수의 매개변수와 전달인자가 어떻게 동작하는지 보여준다.

```c
/* 함수 프로토타입 */
int function(int arg1, float arg2);

/* 함수 호출 */
function(1);            // >> 출력: 3
function(1, 3.14);      // >> 출력: 4 ( = 1 + 3.14의 정수형만 추출)

/* 함수 정의 */
int function(int arg1, float arg2 = 2.0)
{
    return arg1 + arg2;
}
```

하지만 배열과 같은 저장공간은 위와 동일한 구문으로 인자를 매개변수로 건네줄 수 없다. 인자를 건네는 방법에는 두 가지가 있으며, 매개변수를 배열로 혹은 배열의 메모리 주소(즉, 포인터)로 정의하는 것이다.

```c
void function(int arg[]);

int arr[3] = {value1, value2, value3};
function(arr);              // 배열을 함수의 인자로 넘겨준다.

// 넘겨받은 인자를 배열 그대로 받아들인다.
void function(int arg[])
{
    statements;
    return;
}
```

----

```c
void function(int *arg);

int arr[3] = {value1, value2, value3};
function(arr);              // 배열을 함수의 인자로 넘겨준다.

// 넘겨받은 인자를 배열이 아닌 포인터로 받아들인다.
void function(int *arg)
{
    statements;
    return;
}
```

후자의 방법이 가능한 이유는 배열 자체를 호출하면 배열의 첫 번째 요소의 메모리 주소를 가져오며, 바로 옆 메모리 주소에는 다음 요소가 연쇄적으로 할당되어 있기 때문이다. 상세한 내용은 다음 장인 *C: 포인터*에서 설명할 것이다.

## 시작점
시작점(entry point)는 프로그램이 시작되는 부분이다. C 언어의 시작점은 `main()` 함수이며, 해당 함수는 프로토타입 및 호출이 존재하지 않는다. 이는 C 언어의 유일한 시작점으로 복수의 `main()` 함수가 존재하거나 아예 없을 경우 에러가 발생해 프로그램이 실행되지 않는다.

```c
/* C 언어 프로그램 시작점: main() */
int main(int argc, char **argv)
{
    // 아래에 코드를 입력하세요.

    return 0;
}
```

본 문서의 대부분 코드 예시에는 `main()` 함수가 직접 언급되지 않았으나, 전역 변수와 함수를 제외한 모든 코드들은 `main()` 함수 내에서 작성되어야만 실행된다.

C 프로그래밍 표준에 의하면 `main()` 함수는 반드시 `int` 정수형을 반환해야 하며, `EXIT_SUCCESS`(혹은 정수 `0`) 그리고 `EXIT_FAILURE`이 있다. 만일 반환문이 없을 시, 컴파일러는 자동적으로 `return 0;` 문장을 `main()` 함수의 말단에 삽입한다.

`main()` 시작점은 위와 같은 매개변수를 함축적으로 가진다.
* `argc`: 전달인자 개수(argument count).
* `argv`: 전달인자 데이터 배열(argument vector); 매개변수 정의는 `char *argv[]`로 대체 가능하다.

위의 전달인자 동작은 터미널 명령창을 통해 시 명백히 관측할 수 있다.

```
./app.exe option1 option2
```

| 전달인자 | 데이터        |
|:---------:| ----------- |
| `argv[0]` | `./app.exe` |
| `argv[1]` | `option1`   |
| `argv[2]` | `option2`   |

전달인자 데이터 배열 `argv`는 항상 첫 번째 요소를 실행 프로그램을 할당받으므로 전달인자의 개수 `argc`는 항상 0보다 크다.

한편, 윈도우 OS는 `wmain()` 함수라는 독자적인 시작점을 가지며, 이는 UTF-16 유니코드로 인코딩된 확장 문자(wide character)를 통해 더 많은 언어를 지원한다. 여기서 영문과 숫자와 같은 공통 문자는 UTF-8 유니코드만으로 인코딩된다.

```c
/* 윈도우 OS 확장 문자 지원 C 언어 프로그램 시작점: wmain() */
int wmain(int argc, wchar_t **argv)
{
    // 아래에 코드를 입력하세요.

    return 0;
}
```

확장 문자를 지원하는 `wmain()` 함수가 소개된 이유는 C 언어가 UTF-8을 일반 인터페이스로 사용하는 UNIX 운영체제 기반에서 개발되었기 때문이다. 그러므로 윈도우 OS에서 일반 `main()` 시작점으로는 일부 언어(예를 들어 그리스 및 키릴 문자)를 표현할 수 없는 호환성 문제가 발생한다.

## 재귀 함수
재귀 함수(recursive function)는 스스로를 호출하는 함수이다. 수학에서의 펙토리얼이 재귀 함수 구현의 대표적인 예제이다.

```c
/* 예제: 펙토리얼 "!" */
int factorial(int num)
{
    // 기저 조건: 재귀로부터 탈출하는 조건
    if (num == 1)
        return (1);
    else
        return (num * factorial(num-1));
}
```

여러 함수가 서로를 호출하는 간접적 재귀도 가능하다.

## 콜백 함수

콜백 함수(callback function)은 인자로 전달되는 함수이다. 콜백 함수를 전달받는 함수, 일명 호출 함수(calling function)는 코드 블록 내에서 매개변수 호출을 통해 콜백 함수를 실행한다.

> 여기서 콜백이란, 전달인자로 전달된 함수가 다른 함수에서 언젠가 다시 호출(call back)되어 실행된다는 의미에서 붙여진 용어이다.

아래는 콜백 함수의 예시이며, 이에 대한 자세한 원리는 *C: 포인터 § 함수 포인터*에서 설명할 예정이다.

```c
/* 호출 함수 */
int calling(float (*function)(int, float), int arg)
{
    // 콜백 함수의 호출
    float var = function(arg, 3.0);
    return var;
}

/* 콜백 함수 */
int callback(int arg1, float arg2)
{
    return arg1 + arg2;
}

// 그러므로...
calling(&callback, 1);    // >> 출력: 4.0
```

# **C: 포인터**
본 문서는 *C: 배열*에서부터 시작하여 "포인터"라는 새로운 데이터가 소개되어 자주 언급되었다. 포인터는 C 언어에서 매우 중요한 개념 중 하나로써 더 발전된 프로그램 개발을 가능케 한다. 그러므로 이번 장에서는 포인터에 대한 설명과 이전 장에서 소개된 배열과 함수를 포인터를 활용한 심화된 처리 방식을 소개하려 한다.

## 포인터
포인터(pointer)는 변수에 저장된 값이 아닌, 변수가 저장된 메모리 주소를 가리키는 데이터이다. 32비트와 64비트 운영체제에서 하나의 메모리 주소는 각각 8바이트와 16바이트로 구성된 십육진수 값을 가진다. 포인터 데이터 또한 변수에 저장할 수 있으며, 일반 변수와 마찬가지로 포인터 변수를 정의할 때 자료형이 요구되나 별표(`*`)가 자료형과 식별자 사이에 위치해야 한다.

```c
/* 정수형 포인터 변수 선언 */
int *ptr;
printf("%p", ptr);   // ERROR C4700: 초기화되지 않은 지역 변수 'ptr'이 사용되었습니다.
```

변수의 포인터(즉, 메모리 주소)를 호출하기 위해서는 앰퍼샌드 기호(`&`) 연산자를 사용하여 확인할 수 있다.

```c
/* 정수형 변수 선언 */
int variable = 365;
printf("%p", &variable);
```
```
1014eb010
```

십육진수의 메모리 주소는 수기로 직접 작성할 수 있는 것이 아니며, 이는 매우 위험한 행위이다! 포인터 변수를 초기화하는 방법으로는 기존하는 변수의 메모리 주소를 할당하는 것이 유일하다. 여기서 포인터 변수와 변수 간의 자료형은 일치하도록 한다.

비록 하나의 메모리 주소는 8 바이트(32비트 아키텍쳐) 혹은 16 바이트(64비트 아키텍쳐)의 십육진수로 구성되어 있지만, 각 메모리 주소는 한 바이트의 데이터만 수용할 수 있다. 1 바이트만 있으면 충분한 `char` 문자형 데이터와 달리, `int` 정수형이나 `float` 부동소수점수형 데이터를 표현하기 위해서는 4 바이트의 메모리 용량이 필요하다. 그러나 포인터는 변수가 사용하고 있는 전체 메모리 주소 중에서 맨 첫 주소만 반환하므로 자료형이 언급되지 않으면 포인터는 어느 메모리 주소까지가 하나의 완전한 데이터인지 알 수 없다.

```c
/* 포인터 변수 초기화 */
int variable = 365;

// 동일한 자료형의 포인터 변수
int *ptr1 = &variable;
printf("%p\n",  ptr1);        // >> 출력: 0x1014eb010  (주소)
printf("%d\n", *ptr1);        // >> 출력: 365          (값)

// 상이한 자료형의 포인터 변수
char *ptr2 = &variable;
printf("%p\n",  ptr2);        // >> 출력: 0x1014eb010  (주소)
printf("%d\n", *ptr2);        // >> 출력: 109          (값)
```

위의 예시 코드에서 보이듯이, 포인터 변수가 가리키는 메모리 주소에 할당된 값을 역참조 연산자(`*`)를 통해 호출하는 것이 가능하다. 포인터 변수의 정의에서도 별표를 사용하였으나, 이 둘은 동일한 기호만 사용할 뿐이며 서로 다른 존재이다.

| 연산자          | 변수     | 반환     |
|:------------:|:------:|:------:|
| 참조 연산자(`&`)  | 일반 변수  | 메모리 주소 |
| 역참조 연산자(`*`) | 포인터 변수 | 값      |

만일 일반 변수에서 데이터 변동이 발생하였으면 포인터 변수의 역참조에서도 동일한 데이터 변동을 목격할 수 있다. 이는 두 변수가 동일한 메모리 주소를 공유하고 있기 때문이다. 이러한 C 언어 프로그래밍의 포인터 성질은 매우 중요하게 다루어지는 개념 중 하나이며, 이를 "참조에 의한 호출(call by reference)"이라고 부른다.

### 널 포인터

널 포인터(null pointer)는 아무런 메모리 주소를 가리키지 않는 포인터이다. C 언어에서 포인터 사용은 자칫 메모리 접근 오류 등의 민감한 문제를 야기시킬 수 있기에, 안전한 포인터 사용을 위해 널 포인터을 `NULL` 키워드로 할당한다.

```c
int *ptr = NULL;
printf("%p", ptr);
```
```
0x0
```

### 보이드 포인터
보이드 포인터(void pointer)는 지정된 자료형이 없는 포인터이다(즉, `void`). 이러한 포인터는 어떠한 자료형이라도 자료형 변환을 통해 메모리 주소를 가리킬 수 있는 장점을 가진다.

```c
/* 보이드 포인터 선언 */
void *ptr;

int variable = 356;
ptr = &variable;
printf("%d", *(int*)ptr);
```
```
365
```

### 함수 포인터
함수 포인터(function pointer)는 함수를 가리키는 보이드 포인터이다. 배열에서의 포인터가 첫 번째 요소 메모리 주소를 가리키는 것과 동일한 맥락으로, 함수에서 포인터는 첫 번째 실행문이 담긴 메모리 주소를 가리킨다. 함수 포인터는 아래와 같은 구문으로 초기화한다.

```c
// 함수 정의
int function(int arg1, float arg2) {
    statements;
    return 0;
}

int main() {
    // 여기서부터 코드 입력...

    /* 함수 포인터 초기화 및 호출 */
    int (*ptr)(int, float) = function;
    ptr(1, 3.14);

    return 0;
}
```

함수 포인터를 초기화 시, 포인터 함수의 자료형은 함수 자료형과 일치해야 하며 매개변수 또한 자료형과 개수가 동일해야 한다. 이들을 만족하지 않으면 컴파일 작업 오류가 발생하게 된다. 함수를 `function()`과 같이 소괄호와 함께 호출되면 함수 `return` 문의 데이터가 반환되지만, 소괄호가 없이 `function`만 호출하면 메모리 주소가 대신 반환된다.

# **C: 자료구조**
C 언어에서 흔히 사용되는 `int`, `float`, `char` 등과 같은 데이터 자료형은 이미 `stdio.h` 헤더 파일에 정의되어 있다. 이러한 내부 자료형을 기반으로 목적에 알맞은 자료구조을 새롭게 지정할 수 있으며, 본 장은 자료형처럼 사용할 수 있는 자료구조의 정의 및 활용법을 설명한다.

## 구조체
구조체(structure)는 자료형과 상관없이 여러 내부 변수(일명, 맴버; member)를 하나의 단일 데이터로 통합시킨 자료구조 구성체이다. 구조체의 정의는 `struct` 키워드를 통해 이루어진다.

```c
/* 구조체 정의: 총 5 바이트 활용 */
struct STRUCTURE {
    // 내부 변수 정의
    int   field1;    // 자료형 크기: 4 바이트
    char  field2;    // 자료형 크기: 1 바이트
};
```

정의된 구조체를 자료구조로 사용하는 구조체 변수는 아래와 같은 두 가지 정의 방법이 존재하며, 둘 다 `struct` 키워드가 요구된다.

```c
/* 구조체 변수 초기화 1 */
struct STRUCTURE variable1 = {3, 'A'};
struct STRUCTURE variable2 = {.field2 = 'A', .field1 = 3};
```

----

```c
// 구조체 변수 정의
struct STRUCTURE variable;

/* 구조체 변수 초기화 2 */
variable = (struct STRUCTURE) {3, 'A'};
```

구조체 정의 이후, 구조체 변수의 내부 변수는 `struct` 키워드가 필요없이 맴버 연산자(`.`)를 통해 접근한다.

```c
variable.field1;    // >> 출력: 3
variable.field2;    // >> 출력: A
```

### 익명 구조체
위에서 설명한 구문은 한 번 정의된 구조체를 재사용하여 동일한 자료구조의 여러 구조체 변수를 정의할 수 있도록 한다. 만일 불필요한 리소스를 줄이기 위해 재사용이 불가능한 일회용 구조체를 생성하려면 아래와 같은 구문으로 익명 구조체(anonymous structure)를 정의한다.

```c
/* 일회용 구조체 정의 및 변수 초기화 */
struct {
    int   field1;
    char  field2;
} variable = {3, 'A'};
```

## 공용체
공용체(union)는 구조체와 유사하게 자료형과 상관없이 여러 내부 변수(일명, 맴버; member)를 하나의 단일 데이터로 통합시킨 자료구성 구성체이지만, 내부 변수들은 하나의 메모리 공간을 공유한다. 즉, 공용체의 한 내부 변수 데이터가 변하면 하나의 메모리 주소를 공용하기 때문에 나머지 내부 변수의 값에 영향을 미친다. 공용체의 정의는 `union` 키워드를 통해 이루어진다.

```c
/* 공용체 정의: 총 4 바이트 활용 */
union UNION {    
    // 내부 변수 정의
    int    field1;    // 자료형 크기: 4 바이트
    char   field2;    // 자료형 크기: 1 바이트
}
```

공용체에 할당되는 메모리 크기는 내부 변수 중에서 가장 큰 메모리 용량이 요구되는 자료형과 동일한데, 이는 나머지 내부 변수도 하나의 메모리 공간에서 처리할 수 있도록 하기 위해서이다.

정의된 공용체를 자료구조로 사용하는 공용체 변수는 아래와 같은 정의 방법이 존재하며 `union` 키워드가 요구된다. 비록 공용체가 두 개 이상의 내부 변수를 가지지만 하나의 메모리 공간만을 사용하기 때문에 초기화 단계에서 하나의 내부 변수만 할당하면 된다.

```c
/* 공용체 변수 초기화 */
union UNION variable = (union UNION) {365};    // >> 결과: 0x 00 00 01 6D

printf("Field1: %d (%#010x)\n", variable.field1, variable.field1);
printf("Field2: %d (%#010x)\n", variable.field2, variable.field2);
```

```
Field1: 365 (0x0000016d)
Field2: 109 (0x0000006d)
```

첫 번째 내부 변수 `field1`은 4 바이트 자료형이므로 `0x0000016D`를 전부 처리하여 365 정수가 출력되는 반면, 두 번째 내부 변수 `field2`는 1 바이트 자료형이므로 한 바이트 `0x6D`만 처리하여 109 정수가 출력되었다.

### 익명 공용체
위에서 설명한 구문은 한 번 정의된 공용체를 재사용하여 동일한 자료구조의 여러 공용체 변수를 정의할 수 있도록 한다. 만일 불필요한 리소스를 줄이기 위해 재사용이 불가능한 일회용 공용체를 생성하려면 아래와 같은 구문으로 익명 공용체(anonymous union)를 정의한다.

```c
/* 일회용 공용체 정의 및 변수 초기화 */
union {
    int    field1;
    char   field2;
} variable = {365};
```

## 열거형
열거형(enumeration)은 열거된 항목들을 정수로 순번을 매기는 자료형으로, 자료구조가 아니다. 열거자(enumerator)라고 부르는 열거 항목들은 각각 정수값이 할당되어 있으며, 기본적으로 정수 0부터 시작하여 순서대로 1만큼 값이 증가한다.

> 초창기 C 컴파일러인 "K&R C"에는 존재하지 않았으나, 본 문서에서 다루는 보편적인 컴파일러 버전인 "ANSI C"부터 추가된 구성체이다.

```c
/* 열거형 정의 */
enum ENUMERATION {
    enumerator1,     // 열거자 = 0
    enumerator2,     // 열거자 = 1
    enumerator3,     // 열거자 = 2
    enumerator4      // 열거자 = 3
};
```

열거자들에 할당되는 정수는 할당 연산자(`=`)를 통해 달리 지정이 가능하며, 다른 열거자와 동일한 값이 할당되어도 상관없다.

```c
enum ENUMERATION {
    enumerator1 = 3, // 열거자 = 3
    enumerator2 = 1, // 열거자 = 1
    enumerator3,     // 열거자 = 2
    enumerator4      // 열거자 = 3
};
```

그러나 동일한 이름의 열거자는 유일해야 하는데, 이는 열거자가 상수 전역 변수와 같은 개념이 적용되기 때문이다. 즉, C 프로젝트 전체에 사용이 가능하나 초기화 이후 값 변동이 불가능한 데이터라고 볼 수 있다.

```c
enum ENUMERATION1 {
    enumerator1,
    enumerator2,
    enumerator3,
    enumerator4
};

enum ENUMERATION2 {
    enumeration4,    // 오류: 열거자 'enumerator4'가 재정의 되었습니다.
    enumeration5,
    enumeration6
};
```

열거형 정의 이후, 열거형 변수는 `enum` 키워드를 통해 정의되며 열거자 자체는 키워드를 필요로 하지 않는다. 또한 열거형 변수가 아닌 정수형 변수로도 열거자를 할당받을 수 있다.

```c
/* 열거형 변수에 열거자 할당 */
enum ENUMERATION variable = enumerator1;
```
----
```c
/* 정수형 변수에 열거자 할당 */
int variable = enumerator1;
```

## Typedef 키워드

`typedef` 키워드는 기존에 존재하는 자료형 혹은 자료구조를 다른 명칭(일명 별칭; alias)으로 선언하여 가독성을 높이는 역할을 한다.

```c
/* int 정수 자료형의 가명 선언 */
typedef int dtypeName;
```

C 프로그래밍에서 `typedef` 키워드는 그 외에 구조체와 공용체 정의을 간략화하는 역할도 지닌다.

```c
/* 간략화된 구조체 정의 */
typedef struct {
    int    field1;
    char   field2;
} STRUCTURE;

STRUCTURE variable;                // struct STRUCTURE variable;
variable = (STRUCTURE) {3, 'A'};   // variable = (struct STRUCTURE) {3, 'A'};
```
----
```c
/* 간략화된 공용체 정의 */
typedef union {
    int    field1;
    char   field2;
} UNION;

UNION variable;                    // union UNION variable;
variable = (UNION) {365};          // variable = (union UNION) {365};
```

## 사용자 정의 포인터
사용자 정의 자료구조가 포인터로 메모리 주소가 가리켜진 경우, 자료구조의 내부 변수는 화살표 연산자(`->`)를 통해 접근할 수 있다. 화살표 연산자는 주로 사용자 정의 자료구조 데이터가 함수의 인자로 전달되어야 할 시 사용된다.

```c
/* 구조체 정의 */
struct STRUCTURE {
    int    field1;
    char   field2;
};

// 변수 및 포인터 정의
struct STRUCTURE variable;
struct STRUCTURE *ptr = &variable;

ptr->field1 = 3;
ptr->field2 = 'A';

// 그러므로...
printf("%d\n", ptr->field1);
printf("%c\n", ptr->field2);
```

```
3
A
```

# **C: 메모리 할당**
메모리 관리는 C 프로그래밍 언어에서 매우 중대한 비중을 차지한다. 그 중에서 동적 메모리 할당은 보다 더 나은 메모리 효율성을 위해 사용되며, 포인터와 깊은 연관성을 지니므로 이전 *C: 포인터* 장의 충분한 개념적 이해는 반드시 요구된다. 여기서 메모리란, 컴퓨터에서 임시기억장치 역할을 하는 주기억 장치인 RAM(random access memory)을 가리킨다.

## 스택 구조
스택(stack)은 선형적 LIFO(Last-In-First-Out), 즉 마지막에 입력된 데이터가 먼저 출력되는 데이터 나열 구조이다. 빠른 메모리 접근성의 장점을 가지고 있기 때문에, 컴파일러는 정의되는 데이터의 메모리 공간 할당 및 제거되는 데이터의 메모리 공간 해제를 하는 데 스택을 기본 메모리 구조로 사용한다. 하지만 컴파일러가 사용하는 스택 기반의 메모리 할당은 관리가 힘들다는 치명적인 단점을 가진다.

스택 구조 특성이 두드러지는 대표적인 예시로써 조건문, 반복문, 혹은 함수 내에서 정의된 지역 변수가 해당 코드 블록 외에서 사용할 수 없는 성질이 있다.

### 큐 구조
큐(queue) 구조는 선형적 FIFO(First-In-First-Out), 즉 먼저 입력된 데이터가 먼저 출력되는 데이터 나열 구조이다. 스택 구조와 대조되는 특성을 가지며, 대표적인 예시로는 USB 혹은 이더넷에서 사용되는 직렬 통신(serial communication)이 존재한다.

## 동적 할당
비록 스택 기반 메모리 할당은 빠르다는 장점이 존재하나 연속성을 지닌 메모리 구조인 관계로 관리가 힘든 단점을 가진다. 또한 컴파일러의 스택 기반 메모리 할당 주목적은 데이터 저장이 아닌 "데이터 처리"이므로 RAM에서의 스택 메모리 영역 용량은 크게 제한되어 있다. 그러나 컴파일러가 접근할 수 있는 RAM 영역에는 스택 이외에도 힙(heap) 메모리 영역이 존재한다. 힙은 스택보다 메모리 접근 속도는 느리지만 데이터 관리가 용이하고 프로그램이 종료될 때까지 유지되는 장점을 지닌다.

> 힙 메모리 영역은 [힙 자료구조](https://ko.wikipedia.org/wiki/힙_(자료_구조))와 전혀 상관이 없으며, 순수히 RAM의 메모리 공간을 지칭하는 용어이다.

힙 메모리에 데이터를 할당하는 작업을 동적 할당(dynamic allocation)이라고 부른다. 개발자가 특정 함수를 직접 입력해야만 동적 할당할 수 있는 데 메모리 주소는 무작위로 선택된다. 동적 할당 데이터는 컴파일러가 자동적으로 할당한 데이터가 아니므로 모든 힙 메모리 데이터는 반드시 개발자가 수동으로 메모리 해제가 되어야 한다. 동적 할당 해제를 하지 않을 시, 프로그램이 컴파일되어도 비정상적으로 동작하거나 메모리 오류로 중단되기도 한다.

동적 할당을 활용하려면 `stdlib.h` 헤더 파일이 필요하다.

| 함수    | 예제               | 설명                                                  |
|:-----------:| --------------------- | ------------------------------------------------------------ |
| `malloc()`  | `malloc(size);`       | `size` 바이트 크기의 힙 메모리 공간을 할당한다; 할당된 메모리는 초기화되지 않아 방치할 시 `SEGFAULT` 오류가 발생할 수 있다. |
| `calloc()`  | `calloc(num, size);`  | `size` 바이트 크기의 힙 메모리 공간을 `num` 번 연속적으로 할당한다; 기본적으로 할당된 메모리는 0으로 초기화되지만 `malloc()` 함수보다 속도가 느리다. |
| `realloc()` | `realloc(ptr, size);` | `size` 바이트 크기의 힙 메모리 공간으로 재할당한다.                 |
| `free()`    | `free(ptr);`          | 동적 할당 메모리를 해제한다.                        |

```c
#include <stdlib.h>

/* 동적 할당: 10 바이트 */
int* ptr = malloc(10);

/* 재할당: 10 -> 20 바이트 */
ptr = realloc(ptr, 20);

/* 동적 할당 해제 */
free(ptr);
```

### 동적 배열
동적 배열은 크기 변경이 가능한 배열을 의미한다. 일반 배열의 정의는 정적인 관계로 크기 변경이 불가능하며, 또한 비상수 정수형 변수로 크기를 지정할 수도 없다. 한편, 구조체 및 동적 할당을 활용하여 크기 변경이 가능한 배열인 동적 배열(dynamic array)를 생성할 수 있다.

```c
#include <stdlib.h>

/* 갼략화된 구조체 정의 */
typedef struct {
    int*   arr;         // 배열 요소
    int    size;        // 할당된 크기
    int    capacity;    // 최대 허용 용량
} dynamicArr;

// 정수형 동적 배열 정의
dynamicArr variable;

/* 동적 배열: 최대 1 바이트 */
variable.arr = calloc(1, sizeof(*variable.arr));
variable.capacity = 1;

/* 동적 배열: +5 바이트 재할당 */
variable.arr = realloc(variable.arr, (variable.capacity + 5) * sizeof(*variable.arr));
variable.capacity += 5;
```

### 메모리 누수
메모리 누수(memory leak)는 메모리 관리 오류로써, 동적 할당 메모리가 제때 해제되지 않고 축적되어 더이상 사용 가능한 힙 영역 메모리가 없을 때 발생한다. 메모리 부족 현상은 결과적으로 컴퓨터 시스템 고장까지 유래할 수 있다. 메모리 누수 현상을 방지하기 위해 `free()` 함수로 더이상 사용되지 않는 동적 할당 메모리를 해제시킨다.

```c
/* 동적 할당 해제 */
free(ptr);
```

### 허상 포인터
비록 `free()` 함수로 동적 할당 메모리를 해제하였어도, 해당 메모리를 접근하는 데 사용된 포인터는 아직 동일한 메모리 주소를 가리키고 있다. 메모리 해제로 더이상 아무런 데이터가 없는 메모리 주소를 여전히 가리키는 포인터를 허상 포인터(dangling pointer)라고 부르는 데, 이는 결과적으로 `SEGFAULT` 메모리 오류를 야기할 수 있다. 허상 포인터를 방지하기 위해 해제된 동적 할당 메모리를 가리키는 포인터를 `NULL`을 할당하여 널 포인터로 만든다. 즉, 의미없이 메모리 주소를 가리킬 바에 아무런 주소를 가리키지 않도록 변경하는 것이다.

```c
/* 올바른 동적 할당 해제: 메모리 주소의 데이터 반납 -> 널 포인터 할당 */
free(ptr);
ptr = NULL;
```

# **C: 파일 관리**
C 언어는 외부 파일을 읽음으로써 데이터를 불러오거나 작성함으로써 데이터를 저장할 수 있다. 본 장은 주로 외부 `.txt` 텍스트 파일을 접근하고 변경하는 데 집중한다.

## 파일 열기
C 프로그램에서 파일을 처리하기 전에, 우선 파일을 열어야 한다. `fopen()` 함수를 통해 원하는 파일을 열 수 있으며, 파일 스트림을 처리하는 `FILE` 자료형 데이터를 반환한다. 함수의 전달인자로는 처리하려는 파일 이름 및 경로, 그리고 파일 처리 모드를 입력해야 한다.

```c
FILE* fptr = fopen("sample.txt", mode);
```

| 모드   | 설명                                     |
|:------:| ----------------------------------------------- |
| `"r"`  | 읽기 모드 (파일 부재시 미생성)              |
| `"w"`  | 덮어쓰기 모드 (파일 부재시 생성)     |
| `"a"`  | 덧붙이기 모드 (파일 부재시 생성)      |
| `"r+"` | 읽기 및 쓰기 모드 (파일 부재시 미생성)  |
| `"w+"` | 읽기 및 덮어쓰기 모드 (파일 부재시 생성) |
| `"a+"` | 읽기 및 덧붙이기 모드 (파일 부재시 생성) |

## 파일 읽기
C 언어는 세 종류의 파일 읽기 함수를 가졌으며, 입력 함수와 매우 유사하다.

| 입력      | 구문                     | 설명                                                  |
|:----------:| -------------------------- | ------------------------------------------------------------ |
| `fgetc()`  | `fgetc(fptr);`             | 선택된 파일 스트림을 가리키는 `fptr` 포인터를 통해 다음 문자를 반환한다. |
| `fgets()`  | `fgets(buff,n,fptr)`       | `fptr` 포인터가 가리키는 파일에서 `char buff[100]`와 같은 버퍼에 널 종단자(`\0`)을 포함한 `n`개 만큼의 문자를 저장한다. |
| `fscanf()` | `fscanf(fptr,"format",vars)` | `fptr` 포인터가 가리키는 파일에서 데이터를 스페이스 혹은 줄바꿈을 기준으로 나누어 지정된 `"format"` 형식에 맞게 변수 `vars`에 저장한다. 문자열을 제외한 입력을 받을 모든 데이터는 주소 연산자(`&`)가 필요하다. |

```
<sample.txt>
Hello World!
65 3.14159
```

```cpp
/* 파일 읽기 */
FILE* fptr = fopen("sample.txt", "r");

// "fgetc()" 함수
char variable1;
var1 = fgets(fptr);
// >> 결과: variable1 = 'H'

// "fgets()" 함수
char buff[10];
fgets(buff, 7, fptr);
// >> 결과: buff = "ello W"

// "fscanf()" 함수
char[10] variable2; int variable3; float variable4;
fscanf(fptr, "%s %d %f", var2, &var3, &var4);
// >> 결과: variable2 = "orld!", variable3 = 65, variable4 = 3.141590
```

## 파일 쓰기
C 언어는 세 종류의 파일 쓰기 함수를 가졌으며, 출력 함수와 매우 유사하다.

| 출력      | 구문               | 설명                                                  |
|:-----------:| -------------------- | ------------------------------------------------------------ |
| `fputc()`   | `fputc(char,fptr);`  | 선택된 파일 스트림을 가리키는 `fptr` 포인터를 통해 단일 문자를 입력한다.  |
| `fputs()`   | `fputs(str,fptr);`   | `fptr` 포인터가 가리키는 파일에 문자열 `str`을 입력한다. |
| `fprintf()` | `fprintf(fptr,"format",vars);` | `fptr` 포인터가 가리키는 파일에 데이터 혹은 변수 `vars`를 지정된 `"format"` 형식에 맞게 입력한다. |

```c
/* 파일 쓰기 */
FILE* fptr = fopen("sample.txt", "w");

// "fputc()" 함수
fgets('A', fptr);

// "fputs()" 함수
fgets("Hello World!\n", fptr);

// "fprintf()" 함수
fprintf(fptr, "%d %.2f %s", 1, 3.14159, "Program");
```

```
<sample.txt>
AHello World!
1 3.14 Program
```

### 파일 생성
덮어쓰기 및 덧붙이기와 같은 파일 쓰기 모드는 이미 존재하는 파일 내용을 수정하는 것 외에도 파일을 새롭게 생성할 수 있다. 단순히 파일 경로 및 이름을 지정하므로써 새로운 파일을 생성할 수 있다.

```c
/* 파일 생성 */
FILE* fptr = fopen("path\\new_file.txt", "w");
fgets("Hello World!\n", fptr);
```

## 파일 닫기
안전한 파일 관리를 위해 작업이 마무리된 파일은 반드시 닫도록 한다. 파일을 닫기 위해서는 `fclose()` 함수를 사용한다.

```c
/* 파일 닫기 */
fclose(fptr);
```

파일이 정상적으로 닫혔으면 정수 0을 반환하며, 실패하였으면 음의 정수인 `EOF`(End-of-File)를 반환한다.

# **C: 다중 스크립트**
현재까지 본 문서는 `main()` 함수를 가지는 하나의 메인 스크립트만을 사용하여 프로그램을 빌드하였다. 그러나 프로젝트 규모가 커지면 코드를 다른 부가적인 스크립트로 분산하여 효율적으로 프로젝트를 관리하는 방법을 채택할 수 있다. 본 장은 프로젝트 내의 스크립트 간 데이터나 함수를 주고받을 수 있도록 구축하는 방법과 이에 대한 설명을 제공한다.

## 포함 지시문
`#include` 포함 지시문(inclusive directive)은 전처리기 지시문 중 하나로 대표적으로 `stdio.h`와 같은 헤더 파일을 불러오는 데 매번 사용된다. 헤더 파일에 선언된 기능들을 불러오는 데 사용된 `#include` 지시문의 정확한 기능은 헤더 파일의 전체 코드를 지시문이 위치한 곳에 그대로 붙여넣는다.

### 헤더와 소스 파일 나누기
문서 초반의 *C: 기초* 장에서 처음 언급된 소스(source) 파일과 헤더(header) 파일의 역할을 다시 정리하면 전자는 데이터나 함수의 정의, 그리고 후자는 데이터나 함수의 선언이 위주인 스크립트이다. 다만, 시작점인 `main()` 함수는 선언부가 없다는 점을 고려하면 메인 스크립트를 다음과 같이 구성할 수도 있다.

```c
/* 헤더 파일: main.h */
#include <stdio.h>

int variable;
void function(int, float);

```
```c
/* 소스 파일: main.c */
#include "main.h"

int main(){
    
    variable = 'A';
    printf("%c\n", variable);

    function(1, 3.14);

    return 0;
}

void function(int arg1, float arg2){
    printf("%.3d\n", arg1 + arg2);
}
```
```
A
4.140
```

위의 소스 파일의 헤더 파일 포함은 결과적으로 `#include` 지시문으로 인해 다음과 같이 표현된 것과 동일하다.

```c
/* #include "main.h" 코드 시작 */
#include <stdio.h>

int variable;
void function(int, float);
/* #include "main.h" 코드 끝 */

int main(){
    
    variable = 'A';
    printf("%c\n", variable);

    function(1, 3.14);

    return 0;
}

void function(int arg1, float arg2){
    printf("%.3d\n", arg1 + arg2);
}
```

## `extern` 키워드
`extern` 키워드는 변수를 정의없이 선언만 가능케 한다. 앞에서 언급한 바로는 선언은 정의와 동일하다고 하였으나, `extern` 키워드의 사용은 특수한 경우에 해당된다. 즉, 이번 내용에서는 선언과 정의의 명확한 차이를 짚고 넘어가야 한다.

변수나 함수를 정의하면 해당 데이터에 대한 메모리가 할당되므로 각 데이터마다 한 번만 정의할 수 있다. 반면, 선언은 메모리 할당 없이 컴파일러에게 변수나 함수의 존재만 알려줄 뿐이므로 데이터 할당은 허용되지 않으나 여러 번 선언이 가능하다. 이러한 성질이 스크립트 간 데이터 및 함수 공유에 매우 중요한 역할을 한다.

```c
/* 헤더 파일: module.h */
#include <stdio.h>

// "extern" 키워드로 변수 "variable" 선언
extern char variable;
void function(int, float);
```

```c
/* 소스 파일: module.c */
#include "module.h"

// 본격 변수 "variable" 정의
char variable = 'A';
void function(int arg1, float arg2){
    printf("%.3f\n", arg1 + arg2);
}
```

```c
/* 메인 스크립트 */
#include <stdio.h>
#include "module.h"

int main() {

    printf("%c\n", variable);
    function(1, 3.14);

    return 0;
}
```
```
A
4.140
```

만일 `module.h` 헤더 파일에서 `extern` 키워드를 사용하지 않았으면 변수는 선언이 아닌 정의가 되어버린다. 오로지 한 번만 정의가 가능한 변수가 `module.c` 소스 파일과 메인 스크립트에서 동시에 정의되어 결과적으로 반복 정의로 의한 컴파일 오류가 발생한다.

반면 `extern` 키워드를 사용하면 변수는 여러 번 선언이 가능하다. `module.c` 소스 파일과 메인 스크립트에서 동시에 선언되는 것으로 컴파일 작업에는 전혀 문제가 없으나, 변수를 사용하기 위해서는 단 한 번의 정의가 반드시 필요하다. 이러한 이유로 `module.c`에 `char variable = 'A';` 정의가 존재하는 것이며, 메인 스크립트에서는 `variable` 전역 변수의 값을 그대로 출력할 수 있게 된다.

# **C: 예외 처리**
예외(exception)는 잘못된 코딩이나 입력으로 인해 프로그램상 실행 불가능 코드 오류이다. 컴파일러에서 걸러지는 오류가 아니기에 정상적인 프로그램 빌드가 이루어질 수 있으나, 예외가 발생하면 프로그램이 즉시 중단된다. C 프로그래밍 언어에서는 예외를 처리할 수 있는 함수 및 매크로가 존재하며, 대표적으로 `errno`, `perror()`, 그리고 `strerror()` 등이 있다. 예외 처리는 빌드된 프로그램이 중단이나 충돌 없이 안정적으로 실행되는 것을 주목표로 한다.

## 오류 번호
오류 번호(error number) 혹은 `errno` 매크로는 `errno.h` 헤더 파일 내에 정의된 전역 변수이다. 매크로를 사용하기 위해서는 먼저 정수 0으로 정수되어야 하며, 어떠한 오류가 발생하면 새로운 정수가 자동적으로 할당된다. 윈도우 OS의 경우, 오류 번호와 내용은 [Microsoft 개발자](https://docs.microsoft.com/en-us/windows/win32/debug/system-error-codes) 문서에서 확인할 수 있다.

아래의 예시 코드는 존재하지 않는 파일을 읽기 모드로 열려고 할 때 발생하는 오류를 `errno` 매크로로 감지한다.

```c
/* "errno.h" 헤더 파일 */
#include <errno.h>

/* errno 전역 변수 선언 */
extern int errno;

int main(){
    /* errno 전역 변수 초기화 */
    errno = 0;
    
    FILE* fptr = fopen("./non_existance.txt", "r");
    
    // 파일 열기 실패 경우...
    if (fptr == NULL) {
        // 오류명 및 번호: ENOENT 2 (해당 파일 혹은 경로 미발견)
        fprintf(stderr, "파일 열기 오류 발생! 오류 코드: %d\n", errno);
        exit(-1);
    }

    fclose(fptr);
    return 0;
}
```

```
파일 열기 오류 발생! 오류 코드: 2
```

### 표준 오류 스트림
이전 *C: 기초 § 입력 & 출력* 장에서 가장 흔히 사용되는 출력 스트림인 "표준 출력" `stdout`을 소개하였다. C 프로그래밍에는 다른 스트림도 존재하는데, 그 중에는 오류 내용을 전달을 목적으로 하는 "표준 오류(standard error)" `stderr` 스트림이 존재한다.

> 여기서 스트림(stream)이란, 사전적 의미로 물이 흐르는 개울을 의미한다. 즉, 컴퓨터 통신 용어에서 스트림은 데이터가 흐르는 길을 의미한다.

```c
fprintf(stderr, "Hello World!");
```

이렇게 나뉘어진 스트림은 프로그램으로부터 데이터가 장치 혹은 파일로 전송되는 데 선택적 제어를 가능케 한다.

## 오류 설명
각종 오류들은 정수형으로 표현되어 `errno` 매크로를 통해 전역 변수에 저장된다. 그러나 해당 오류를 정수가 아닌 텍스트로 된 내용을 보기 위해서는 `perror()` 함수를 사용한다.

```c
int main(){
    
    FILE* fptr = fopen("./non_existance.txt", "r");
    if (fptr == NULL) {
        // 오류명 및 번호: ENOENT 2 (해당 파일 혹은 경로 미발견)
        perror("오류 설명");
        exit(-1);
    }

    fclose(fptr);
    return 0;
}
```

```
오류 설명: No such file or directory
```

# **C: 전처리기**
C 프로그래밍 언어 컴파일 작업은 두 단계를 거쳐 빌드가 진행되는 데, 전처리 작업과 컴파일 작업으로 나뉘어진다. 전처리 작업에서 `#include`와 같은 전처리기 지시문은 컴파일러에 의해 처리된다. 이러한 전처리기 지시문은 C 언어 프로그래밍에 있어 편리성을 제공하는 데, 본 장에서는 일부 유용한 전처리기 지시문에 대하여 소개한다.

## 매크로 정의
매크로(macro)란 식별자가 있는 코드 조각이다. 여기서 코드 조각이란 숫자나 문자와 같은 간단한 데이터가 될 수 있으며, 혹은 전달인자를 받는 표현식이나 문장이 될 수 있다. 전자와 후자는 각각 "객체형식(object-like)" 그리고 "함수형식(function-like)" 매크로라고 부른다.

한 번 정의된 매크로는 프로그램 실행 시 변경될 수 없다는 장점을 가진다. 정의된 매크로는 마치 전역 변수인 마냥 헤더 파일에서 `#include`와 같은 포함 지시문을 통해 다른 스크립트에서도 사용할 수 있다.

### `#define` 지시문
`#define` 지시문은 새로운 매크로를 생성하는 데 사용한다.

```cpp
#define SOMETHING       value                // 객체형식 매크로
#define ANYTHING(x, y)  (x * SOMETHING - y)  // 함수형식 매크로
```

### `#undef` 지시문
`#undef` 지시문은 매크로 정의를 제거하는 데 사용한다. 때때로 서로 다른 데이터가 동일한 이름을 가져 생기는 식별자 충돌 문제가 매크로로부터 발생하기 때문이다.

```cpp
#undef SOMETHING
```

### 컴파일러 내장 매크로
컴파일러는 개발자가 사용할 수 있는 공통된 표준 매크로 및 컴파일러 특정 내장 매크로를 가진다. 아래는 MSVC, GCC, 그리고 그 외의 컴파일러가 가지는 내장 매크로 목록을 보여주는 문서이다(영문).

* MSVC: [Microsoft Docs - 미리 정의된 매크로](https://docs.microsoft.com/en-us/cpp/preprocessor/predefined-macros)
* GCC: [GCC Online Documentation - Predefined Macros](https://gcc.gnu.org/onlinedocs/cpp/Predefined-Macros.html)
* 그 외: https://sourceforge.net/p/predef/wiki/Compilers/

## 조건 포함문
조건 포함문(conditional inclusion)은 조건을 제시하여 부합 여부에 따라 특정 코드를 컴파일 작업 시 포함시킬 것인지 배제할 것인지 결정한다. 

```cpp
#if    SOMETHING > value
    statements;
#elif  SOMETHING < value
    statements;
#else
    statements;
#endif
```

비록 조건 포함문이 일반 조건문의 키워드와 유사할지라도 절대 `if` 및 `else` 조건문을 대체하기 위해 사용되지 말아야 한다.

### 매크로 조건
조건 포함문은 매크로의 정의 여부를 판단할 수 있다.

```cpp
// 만일 64비트 ARM 혹은 x64 아키텍쳐로 컴파일 할 경우...
#ifdef    _WIN64
    statments;
#endif

// 만일 64비트 ARM 혹은 x64 아키텍쳐로 컴파일되지 않은 경우...
#ifndef    _WIN64
    statements;
#endif
```

## Pragma 지시문

Pragma 지시문(pragma directive)은 컴파일러의 기능과 옵션을 설정하기 위해 사용되는 전처리기 지시문이다. 개발사마다 제작한 컴파일러는 기술적 성능이 각각 다른 관계로, pragma는 비공통적인 컴파일러 특정 전처리기 지시문이다.

> Pragma란 용어는 pragmatic의 줄임말로, 사전적 의미로는 "실용적인"을 뜻한다. 이는 실질적 컴파일러 동작 및 처리 방식에 관여한 것을 보아 붙여진 용어라고 판단된다.

* MSVC: [Microsoft Docs - Pragma Directives and the Pragma Keyword](https://docs.microsoft.com/en-us/cpp/preprocessor/pragma-directives-and-the-pragma-keyword)
* GCC: [GCC Online Documentation - Pragmas](https://gcc.gnu.org/onlinedocs/gcc/Pragmas.html)

본 장은 마이크로소프트의 비주얼 스튜디어에서 제공하는 가장 흔하고 널리 사용되는 MSVC 컴파일러의 pragma 지시문을 위주로 다룬다.

### `#pragma once`
`#pragma once`는 컴파일 작업 시 `#include` 지시문을 통해 중복 포함된 헤더 파일을 한 번만 포함시키는 pragma 지시문이다.

```cpp
#pragma once
```

결과적으로 하나의 소스 파일에 헤더 파일이 중복적으로 포함이 되는 것을 제한하므로써 정의가 반본되는 현상을 막을 수 있는 데, 이러한 기능을 *헤더 중복 방지(include guard)*라고 부른다. 추가적으로 `#pragma once` 지시문을 사용하면 처리하는 헤더 파일 횟수가 줄어들어 컴파일 작업 시간도 함께 줄이게 된다.

아래의 코드는 `#pragma once` 지시문을 사용하지 않고 헤더 중복 방지 기능을 구현하는 방법이다.

```cpp
/* 헤더 파일: "header.h" */
#ifndef HEADER_FILE
#define HEADER_FILE

#endif    /* HEADER_FILE */
```

만일 `header.h` 헤더 파일이 아직 처리되지 않았으면 컴파일러는 처음으로 `HEADER_FILE` 매크로를 정의한다. 그러나 헤더 파일을 다시 한 번 마주하였을 시, `HEADER_FILE`이 이미 정의되어 있기에 매크로 조건에 의해 컴파일러는 헤더 파일을 처리하지 않는다.

### `#pragma region`
컴파일 작업에는 직접적인 영향을 미치지 않으나, `#pragma region` 및 `#pragma endregion` 쌍은 가독성을 위해 비주얼 스튜디오 내에서 지정된 코드 부분을 한 줄로 압축하거나 펼치는 기능을 제공한다.

```cpp
#pragma region REGIONNAME
    statements;
#pragma endregion
```
