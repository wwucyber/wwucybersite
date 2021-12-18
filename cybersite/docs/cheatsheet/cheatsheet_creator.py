#!/usr/bin/env python3
import fileinput
import glob

#generate list of files in directory to rename
filenames = glob.glob("*.md")
#insert filesnames into titles and strip ".md" for titles
titles = []
for x in range(len(filenames)):
    titles.append(filenames[x][:-3])
#loop through all files in directory ending in .md and search for "INSERT_PROGRAM_NAME_HERE" and replace with titles.
for x in range(len(filenames)):
    with fileinput.FileInput(filenames[x], inplace=True, backup=".bak") as file:
        for line in file:
            print(line.replace("INSERT_PROGRAM_NAME_HERE", titles[x]), end='')