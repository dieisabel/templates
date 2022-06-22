CC         := gcc
CFLAGS     := -Wall
EXECUTABLE := main

SRC := ./src
OBJ := ./obj
BIN := ./bin

SOURCES := $(shell find $(SRC) -name "*.c")
OBJECTS := $(patsubst $(SRC)/%.c, $(OBJ)/%.o, $(SOURCES))

default: build run clean

build: compile
	$(CC) $(CFLAGS) $(OBJECTS) -o $(BIN)/$(EXECUTABLE)

compile: $(OBJECTS)

$(OBJ)/%.o: $(SRC)/%.c
	dirname $@ | xargs mkdir -p
	$(CC) -c $(CFLAGS) -o $@ $<

run: $(BIN)/$(EXECUTABLE)
	./$<

clean:
	rm -r $(OBJ)/* $(BIN)/*
