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