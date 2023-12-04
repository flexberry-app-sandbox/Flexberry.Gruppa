docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gruppa-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t gruppa-java/app ../../..
