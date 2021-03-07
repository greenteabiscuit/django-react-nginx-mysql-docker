# django-react-nginx-mysql-docker

## Modify the time for wait.sh

Modify the timeout seconds in `frontend/nginx/wait.sh` if the frontend nginx server starts earlier than react. (e.g. 15 -> 120)

```
WAITFORIT_TIMEOUT=${WAITFORIT_TIMEOUT:-15}
```

## `backend/web-back/.env` just for development

```
SECRET_KEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
DEBUG=False
HOST=db
USER=user
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

## run server

```
docker-compose up --build
```
