# SERVER: топ-20 курсов

# Отзывы
## NotifyReview
``` bash
curl --request POST \
  --url http://localhost:3000/api/review/notify \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Тест 3",
	"title": "Заголовок",
	"description": "Описание тестовое",
	"rating": 5,
	"productId": "6041f7a3b3e24b1e15e98d38"
}'
```

## AddReview
``` bash
curl --request POST \
  --url http://localhost:3000/api/review/create \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Тест 3",
	"title": "Заголовок",
	"description": "Описание тестовое",
	"rating": 5,
	"productId": "6041f7a3b3e24b1e15e98d38"
}'
```

## ReviewFind
``` bash
curl --request GET \
  --url http://localhost:3000/api/review/byProduct/603f519c245f4018275b73f1 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImEyQGEucnUiLCJpYXQiOjE2MTQ3ODM5Njh9.qME9vjdg4P_2xDJOAHDXPAdXKNtfncNSjlEy6g-nuTA'
```

# Авторизация
## Login
``` bash
curl --request POST \
  --url http://localhost:3000/api/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
	"login": "as@a.ru",
	"password": "1"
}'
```

## Register
``` bash
curl --request POST \
  --url 'https://localhost:3000/api/auth/register?%D0%B2%D1%88=' \
  --header 'Content-Type: application/json' \
  --data '{
	"login": "silf42@mail.ru",
	"password": "max789789"
}'
```

# Продукты
## GetProduct
``` bash
curl --request GET \
  --url http://localhost:3000/api/product/686b82e9466862b9651bed65
```

## DeleteProduct
``` bash
curl --request DELETE \
  --url http://localhost:3000/api/product/686b82e9466862b9651bed65
```

## FindProduct
``` bash
curl --request POST \
  --url http://localhost:3000/api/product/find \
  --header 'Content-Type: application/json' \
  --data '{
	"category": "",
	"limit": 10
}'
```

## CreateProduct
``` bash
curl --request POST \
  --url http://localhost:3000/api/product/create \
  --header 'Content-Type: application/json' \
  --data '{
	"image": "1.png",
	"title": "Мой продукт",
	"price": 100,
	"oldPrice": 120,
	"credit": 10,
	"description": "Описание продукта",
	"advantages": "Преимущества продукта",
	"disAdvantages": "Недостатки продукта",
	"categories": ["тест"],
	"tags": ["тег1"],
	"characteristics": [{
		"name": "Характеристика 1",
		"value": "1"
	},{
		"name": "Характеристика 2",
		"value": "2"
	}]
}'
```

## UpdateProduct
``` bash
curl --request PATCH \
  --url http://localhost:3000/api/product/6041f77bb3e24b1e15e98d374 \
  --header 'Content-Type: application/json' \
  --data '{
	"image": "2.png",
	"title": "Мой продукт",
	"price": 100,
	"oldPrice": 120,
	"credit": 10,
	"description": "Описание продукта",
	"advantages": "Преимущества продукта",
	"disAdvantages": "Недостатки продукта",
	"categories": ["тест"],
	"tags": ["тег1"],
	"characteristics": [{
		"name": "Характеристика 1",
		"value": "1"
	},{
		"name": "Характеристика 2",
		"value": "2"
	}]
}'
```

# Страницы
## GetPageByAlias
``` bash
curl --request GET \
  --url http://localhost:3000/api/top-page/byAlias/photoshop-alias
```

## CreatePage
``` bash
curl --request POST \
  --url http://localhost:3000/api/top-page/create \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5ydSIsImlhdCI6MTYxNDk0MjAyM30.Z_eBo7maSqRhfCPt6fCTFRsKk7I-jgpFBoSjezg5Yrk' \
  --header 'Content-Type: application/json' \
  --data '{
	"firstCategory": 2,
	"secondCategory": "Облачные",
	"alias": "hosting",
	"title": "FirstVDS",
	"category": "javascript",
	"hh": {
		"count": 1000,
		"juniorSalary": 120000,
		"middleSalary": 220000,
		"seniorSalary": 350000
	},
	"advantages": [{
		"title": "Скорость разработки",
		"description": "Мое описание"
	}],
	"seoText": "тест",
	"tagsTitle": "Полученные знания",
	"tags": ["TypeScript"],
	"metaTitle": "test",
	"metaDescription": "tesdsd"
}'
```

## UpdatePage
``` bash
curl --request PATCH \
  --url http://localhost:3000/api/top-page/6871d7ae5a25784d15c581b0 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5ydSIsImlhdCI6MTYxNDk0MjAyM30.Z_eBo7maSqRhfCPt6fCTFRsKk7I-jgpFBoSjezg5Yrk' \
  --header 'Content-Type: application/json' \
  --data '{
  "tags": [
    "photoshop",
    "after effect",
    "фото",
    "видео"
  ],
  "_id": "6871d7ae5a25784d15c581b0",
  "firstCategory": 0,
  "secondCategory": "Графический дизайн",
  "alias": "photoshop-alias",
  "title": "Photoshop",
  "category": "photoshop",
  "seoText": "Тест",
  "tagsTitle": "Заголвок",
  "advantages": [
    {
      "_id": "604f7babada281374d4495e4",
      "title": "1",
      "description": "Опсиание 1"
    }
  ],
  "createdAt": "2021-03-15T15:22:19.013Z",
  "updatedAt": "2021-03-25T09:12:18.455Z",
  "__v": 0,
  "metaDescription": "Тестовое описание",
  "metaTitle": "Тест"
}'
```

## GetPageById
``` bash
curl --request GET \
  --url http://localhost:3000/api/top-page/60420ea013c3d228d045861e \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5ydSIsImlhdCI6MTYxNDk0MjAyM30.Z_eBo7maSqRhfCPt6fCTFRsKk7I-jgpFBoSjezg5Yrk'
```

## TextSearchPage
``` bash
curl --request GET \
  --url https://localhost:3000/api/top-page/textSearch/photoshop \
  --header 'Content-Type: application/json'
```

## DeletePage
``` bash
curl --request DELETE \
  --url http://localhost:3000/api/top-page/60420ea013c3d228d045861e
```

## FindPage
``` bash
curl --request POST \
  --url http://localhost:3000/api/top-page/find \
  --header 'Content-Type: application/json' \
  --data '{
	"firstCategory": 0
}'
```

# Файлы
## GetSitemap
``` bash
curl --request GET \
  --url http://https/localhost:3000/robots.txt
```

## UploadFile
``` bash
curl --request POST \
  --url http://localhost:3000/api/files/upload \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5ydSIsImlhdCI6MTYxNDk0MjAyM30.Z_eBo7maSqRhfCPt6fCTFRsKk7I-jgpFBoSjezg5Yrk' \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --form files=@/Users/alaricode/Downloads/490164.jpg
```

## GetFile
``` bash
curl --request GET \
  --url http://localhost:3000/static/2021-03-17/490164.jpg
```