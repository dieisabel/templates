FROM python:3.9-slim-bullseye as base

ENV POETRY_VIRTUALENVS_CREATE false
ENV PYTHONBUFFERED 1
ENV PIP_DISABLE_CACHE true
ENV PIP_DEFAULT_TIMEOUT 100

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd --system app && useradd --system -g app -d /app/ app
WORKDIR /app/
RUN chown -R app:app /app/
USER app

RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH "${PATH}:/app/.local/bin"

COPY pyproject.toml poetry.lock ./


FROM base as dev

ENV PYTHONDONTWRITEBYTECODE 1

RUN poetry install --no-interaction --no-ansi
