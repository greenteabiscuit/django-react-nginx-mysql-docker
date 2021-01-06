# django-react-nginx-mysql-docker

## `backend/web-back/.env` just for development

```
SECRET_KEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
DEBUG=False
HOST='db'
USER='user'
```

## migration for database
```
$ docker-compose run --rm web-back sh -c "python manage.py makemigrations"

$ docker-compose run --rm web-back sh -c "python manage.py migrate"
```

## create superuser

```
docker-compose run --rm web-back sh -c "python manage.py createsuperuser"
```

## add packages

```
docker-compose run --rm web-front sh -c "yarn add next react"
```
