# Assignment 6 - Plan a React To-Do List

MOCKUP: 

![Group 15](https://user-images.githubusercontent.com/89480750/202324588-5cd9d368-f5af-41ec-94ea-f135d95bc318.png)


##Step 1: COMPONENT HIERARCHY

Highlight and name the different components:
 1) FullProductTable [yellow]: contains the entire table
 2) Search [orange]: receives user input
 3) ItemsTable [pink]: displays and filters the data collection based on user input
 4) Category [teal]: displays a heading for each category
 5) Items [green]: displays a row for each product and its price

![Group 16](https://user-images.githubusercontent.com/89480750/202324705-1f74aeff-cc15-49c3-a6ef-c5fc73c00d1c.png)

Create a hierarchy: 

    • FullProductTable

        • Search
    
        • ItemsTable
    
            • Category
        
            • Items
        
## Step 3: MINIMAL REPRESENTATION OF UI STATE

### Determine the pieces of data that trigger changes:
• List of items [props]

• Search text [STATE: change over time]

• Checkbox [STATE: change over time]

• Filtered list of items [props]


## Step 4: WHERE SHOULD STATE LIVE

### Determine the owner component: 
• In this case, FullProductTable, because it is the common owner component where all other components can fall under

### Important steps to remember: 
• Add to FullProductTable’s constructor: this.state={filterText: ‘’, inStockOnly: false}

• Pass filterText and inStockOnly to ItemsTable and Search as a prop.

• Use props to filter the rows in ItemsTable and set values in Search.

• onChange event can be used on the inputs to notify the FullProductTable. These will call setState() to update the app instantly
