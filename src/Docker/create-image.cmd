docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gruppa/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gruppa/app ../..
