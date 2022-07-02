# ufo_analysis

## Objective: 
For this project, our client was interested in creating a website that used UFO Sighting data collected from around the country.  Our client lived in a city popular with UFO sighting, and wanted to aggregate sighting data into an easily filterable website so that their readers can parse UFO sighting data with ease. 

## Resources
- javascript
- html
- css
- visual studo code
- UFO sighting data flat file
- bootstrap

## Ease of use

The clients website is very easy intuitive and easy to use.  
1. Initially the website will populate with all of the data from the UFO sightings database. 
2. To filter, the user clicked into a filter box, and types in the desired filter.
  - Dates are X/X/XXXX
  - City is the full name of a city ex: "bonita", "benton", "new york".
  - State is the two letter state abbrevaition
  - Country is he two letter country abbreviation
  - Shape is: Light, triangle, circle, fireball, formation, spehre, disk, chevron, rectagle, other or unknown.
  - 
<img width="225" alt="Screen Shot 2022-07-02 at 12 41 52 PM" src="https://user-images.githubusercontent.com/6634774/177009062-6c713aa7-8958-4f8e-b6c2-d094bfadcc5d.png">

3. Once the user selects a desired filter (city: benton) in this case. The user can either press enter or click off the box to filter the UFO data. The user can repeat this process for any given filter they want to choose.

<img width="225" alt="Screen Shot 2022-07-02 at 12 42 31 PM" src="https://user-images.githubusercontent.com/6634774/177009095-ca8e8a7f-96b0-49e9-a74b-8a59f1e2ed8c.png">


## Limitations

While this website is very good, easy to use and intuitive there are a few drawbacks:
1. The user can only have 2 filters at a given time.
2. There is no way to select more than 1 filter at once, to get two filters, the user must filter the data twice.
3. The user does not know what the options for "shape", "states", "cities", "country" or the "date range" are.  Making this clear will yield a better user experience.

## Further Development

1. Allow users to apply more than 1 filter at a time, to do this we'd remove the "on change" from the field listener, add a button, and read the filters after the button was pressed.
2. Potentially add drop-downs for City/Sate/country/shape that would populate with any unique value from the UFO dataset.
3. Add a date range so that the user knows when the data is from, and what the scope they can search for would be. 

