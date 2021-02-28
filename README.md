# numerare-dierum

## What is This?

As you may have realized, I am interested in measuring time. For example, my Saxon Date project looks to recreate the lunar calendar of our ancient ancestors. Well... my ancient ancestors, anyway.

That calendar measures time in a way that is intimately tied to the tides and seasons, to solstice and moon phase. It was how our people, and, in fact, people everywhere told time before watches, clocks and computers. But, also wanted to explore the opposite. A way of measuring time that is completely disconnected from the natural world. A way of telling time that would be the same, anywhere... everywhere... unlike the current Gregorian calendar, one that is a universal method, independent of the sun or the relative position of the earth in relation to its orbit.

To that end, I have fitted together the Julian Date and Swatch Internet Beats in a way that measures time logically and consistently. And in a way that is completely devoid of where the earth is in its orbit or on its axis at any given moment.

## Beats

Beat Time is essentially a form of decimal time such that the day is arbitrarily divided into 1,000 units, called beats. The Beat Time (or Internet Time or Swatch Time) is the same, no matter where you are in the world. It isnt tied to a specific place. When its @500 in your town, it is @500 in France, Kenya, the dark side of the moon, Antarctica, Olympus Mons on Mars, and in orbit around Proxima Centauri.

## Julian Date

Meanwhile, scientists who were weary of having to convert dates in various eras across time, came up with the idea of counting all that days that have elapsed since some point in the past. Looking at the various methods at their disposal, they noted that the solar cycle, the lunar cycle and the ancient Roman tax calendar (to which many dates in European history has been pinned) all coincided at one point: 1 January 4713 BCE. A point in time that was sufficiently early that it preceded all recorded history.

That count of days, starting with 0 on -4713.01.01, is known as the Julian Date, or JD. The JD on the day I originally created this calendar was 2459270.

## Ad Numerare Dierum

Combining these two concepts seems obvious. Every 1000 beats is a day. Every day increments the Julian Date. Combining the two results in something like, 2459270@134.52. A unique number that identifies a particular day and time in human history. I named it Ad Numerare Dierum, literally, "the count of days."

### Chunking

In teaching, difficult concepts are "chunked." That is, they are broken down into simpler concepts that can be combined into more complex ones. It helps students learn and makes it easier to remember things. 2459270 is a pretty long number to remember. So, I decided to break it down into chunks that resemble the pieces of a date that we are already familiar with... years, months and days.

### Latinisms

Since 2459270 represents the count of days from 1 January 4713 BCE to 24 February 2021 CE, let's format this in a way similar to the Gregorian date that we are used to. We can start by using the 4 digits to the left as a sort of year. 2459. Each one of those will take approximately 2.7 years. So, I named these Triennium. Literally "3 years" in Latin.

Using the fifth digit, we can break each Triennium into 10 parts I choose to call "Melia", which is a Latin(ish) for 1,000. Each Melia is 100 days, and there are 10 of them. I named the melia so that they would be easier to remember and we could write them in the format we are accustomed to. Each of the names mean, "one thousand", "two thousand", "three thousand", etc:

- Nullamelia
- Unumelia
- Duomelia
- Triamelia
- Quattarmelia
- Quinquemelia
- Sexmelia
- Septmelia
- Octomelia
- Novemelia

The remaining two digits will act as the date. And again, since each melia has 100 days, 0 - 99, I named these "Centum".

The day that I created the first Numerare Dierum was JD 2459270. Formatting this in Numerare Dierum yields 70 Duomelia 2459. This date can be written, much like the Gregorian date, in a variety of arrangements.
Duomelia 70, 2459
2-70-2459
2459.2.70
You get the idea.

## Bitbar Notes

This node implementation of Numerare Dierum is intended to display in the menu bar of a Mac using BitBar or SwiftBar.

Place the file nd.js in the BitBar modules folder. Rename the file `nd.1s.js` which allows the BitBar to refresh the data once each second. Run `chmod +x nd.js` to change the permissions on the file so Bitbar can run it.

**Note:** It may be necessary to comment out (or in) certain lines. I left comments in the code to indicate that.

This readme.md was updated on the 73rd day of Duomelia 2459.
