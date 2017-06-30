import csv

reader = csv.reader(open('netflixOriginal.csv', 'rU'), delimiter= ',')
writer = csv.writer(open('netflixNA.csv', 'w'), delimiter= ',')

entries = set()

# print entries

for row in reader:

    if row[0] not in entries:
        writer.writerow(row)
        entries.add(row[0])
