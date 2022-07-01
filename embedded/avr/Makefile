SHELL := /usr/bin/env bash

MMCU          := atmega328p
CPU_FREQUENCY := 16000000UL

UPLOADER   := avrdude
PROGRAMMER := usbasp
PORT       := /dev/bus/usb/005/002
BAUD_RATE  := 9600

CC            := avr-gcc
OPTIMIZATIONS := -Os
CFLAGS        := -Wall $(OPTIMIZATIONS) -mmcu=$(MMCU) -DF_CPU=$(CPU_FREQUENCY)

OBJCOPY  := avr-objcopy
SECTIONS := text data

SRC := ./src
OBJ := ./obj
BIN := ./bin

FILENAME   := main
EXECUTABLE := $(BIN)/$(FILENAME).elf
FIRMWARE   := $(BIN)/$(FILENAME).hex

SOURCES := $(shell find $(SRC) -name "*.c")
OBJECTS := $(patsubst $(SRC)/%.c, $(OBJ)/%.o, $(SOURCES))

default: build upload

build: compile
	@echo "Linking all object files into $(EXECUTABLE) executable"
	@$(CC) $(CFLAGS) $(OBJECTS) -o $(EXECUTABLE)
	@echo "Copying $(foreach section, $(SECTIONS),.$(section)) sections into $(FIRMWARE)"
	@$(OBJCOPY) $(foreach section, $(SECTIONS), -j .$(section)) \
		-O ihex $(EXECUTABLE) $(FIRMWARE)

upload:
	@echo "Uploading firmware to $(PORT) using $(PROGRAMMER)"
	@echo "WARNING! $(UPLOADER) output is suppressed, if any errors occur they will not be printed"
	@$(UPLOADER) -v -p $(MMCU) -c $(PROGRAMMER) -P $(PORT) \
		-b $(BAUD_RATE) -U flash:w:$(FIRMWARE):i 2>/dev/null

compile: $(OBJECTS)

$(OBJ)/%.o: $(SRC)/%.c
	@echo "Compiling $< into $@"
	@dirname $@ | xargs mkdir -p
	@$(CC) -c $(CFLAGS) -o $@ $<
