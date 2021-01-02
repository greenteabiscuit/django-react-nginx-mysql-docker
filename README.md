# django-react-nginx-mysql-docker

## `backend/web-back/.env` just for development

```
SECRET_KEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
DEBUG=False
```

## migration for database
```
$ docker-compose run --rm web-back sh -c "python manage.py makemigrations"

$ docker-compose run --rm web-back sh -c "python manage.py migrate"
```

## add packages

```
docker-compose run --rm web-front sh -c "yarn add next react"
```
