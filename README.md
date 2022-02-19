# Kmong Shopping-Cart

...tech

## Task

**상품목록**

- [x] 담기를 클릭하면 과일 종류에 따라 장바구니 뱃지에 숫자를 표시합니다.
- [x] 필터는 전체, 일반 과일, prime 과일 중 한가지만 선택할 수 있으며, 활성화 된 필터에 따라 아래 상품 목록을 갱신합니다.
- [x] 상품은 일반 과일과 prime 과일로 구분되며, 목록은 prime 과일, 일반 과일 순으로 정렬합니다.
- [x] 담기 혹은 빼기에 따라 잔량과 수량을 갱신합니다.
- [x] 담기 혹기 빼기 버튼을 클릭할 때마다 수량을 1씩 증감시키고,잔량이 0일 경우 담기 버튼을 비활성화 상태로 변경합니다.
- [x] 담은 수량이 1개 이상 있을 경우에만 수량과 빼기 버튼을 표시합니다.

<br />

**장바구니**

- [x] 취소를 클릭하면 수량이 감소하며, 수량이 0이 되면 장바구니에서 제거합니다.
- [x] prime 과일과 일반 과일의 합계를 각각 보여주며 하단에는 총 상품금액을 표시합니다.
- [ ] 결제하기 버튼을 클릭하면 장바구니를 비웁니다.

<br />

---

<br />

## Project Period

    2022-02-18 18:00 ~ 2022-02-20 18:00

<br />

---

<br />

## Installation

    yarn install

<br />

## Usage

    yarn dev

<br />

---

<br />

## Api

**과일 목록 가져오기**

`GET /api/fruits`

`Response 200 OK`

```javascript
[{
    id: number,
    name: string,
    image: string,
    stock: number,
    price: number,
    isPrime: boolean,
}, ...]
```

<br />

**과일 목록 가져오기**

`POST /api/purchase`

`Response 200 OK`

<br />

---
