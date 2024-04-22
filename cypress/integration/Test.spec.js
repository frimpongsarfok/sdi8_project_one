describe("", () => {
  beforeEach(() => {
    // Update per section for relevant parts (e.g.: Index, Search, Fish Inspect, Lists, Compare) when URL/Path is working
    cy.visit('http://localhost:3000/')
  })
  // Search from Splash page
  it("Splash page Search function is functional", () => {
        // Role/Method to find search bar needs to be updated once parameters (Role/ID) have been assigned

    const searchTest = 'Rainbow Fish';
    cy.findByRole('button').click()
    cy.findByRole('textbox', {name: /Search Bar/i}).type(searchTest)

    return cy.findByRole('button').click()
      .then(() => {
        expect(cy.findByRole('name', /Rainbowfish/i)).toExist();
      })
  })
  // Search bar
  it("Search bar is fucntional", () => {
    // Role/Method to find search bar needs to be updated once parameters (Role/ID) have been assigned
    const searchTest = 'Rainbowfish';
    cy.findByPlaceholderText('Search...').click()
    cy.findByRole('textbox', {name: /Search Bar/i}).type(searchTest)

    return cy.findByRole('button').click()
      .then(() => {
        expect(cy.findByRole('name', /Rainbowfish/i)).toExist();
      })
  })

  ///    {/compare?fishA=1&fishB=2}
  // Loads all fish in the Index
  it("Loads all fish when accessing the Index page", () => {
    // Might need to .findByText -- Update 'id' to what the Fish ID handler is when decided
    // Simple check for first and last entiries
    cy.findByRole('id').should('contain', '1')
    cy.findByRole('id').should('contain', '80')
  })
  // Loads all pictures of the fish in the Index
  it("Loads all pictures of the fish when accessing the Index", () => {
    cy.get('img')
      // Insertion to only check for first fish
      .findByRole('id').should('contain', '1')
      .should('exist')
  })
  // Filter for available fish
  it("Allows filtering to show -only- available fish", () => {
  })
  // Filter available fish by hemisphere schedule
  it("Allows filtering by hemisphere to show currently available fish", () => {
  })
  // Filter fish by location (rivers, ponds or sea)
  it("Allows filtering of fish by location", () => {
  })
  // Filter fish by weather conditions
  it("Allows filtering of fish by weather conditions", () => {
  })
  // Filter by fish rarity
  it("Allows filtering/categorization of fish by rarity", () => {
  })
  // Sorting by common selling price
  it("Allows for sorting by common selling price", () => {
  })
  // Sorting by CJ selling price
  it("Allows for sorting by CJ selling price", () => {
  })
  // Allows for viewing of/on one specific fish
  it("Can inspect a fish for further details", () => {
  })
  // Can compare between two fish
  it("Allows for comparison of two fish", () => {
  })
  // Fish can be added to "Need to Catch" list
  it("Fish can be added to 'Need to Catch' list", () => {
  })
  // Fish can be added to "Donated" list
  it("Fish can be added to 'Donated' list", () => {
  })
  // Fish can be added to "Already Caught" list
  it("Fish can be addded to 'Already Caught' list", () => {
  })
  // Track history (at least 10) 
  it("Caches history of viewed fish (at least 10)", () => {
  })
  // Text 
  it("", () => {
  })
})