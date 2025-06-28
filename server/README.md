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
  --url http://localhost:3000/api/product/6040de091a2ac332d80ca788
```

## DeleteProduct
``` bash
curl --request DELETE \
  --url http://localhost:3000/api/product/6041f77bb3e24b1e15e98d37
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
