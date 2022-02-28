import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SearchResult from './Components/Modules/SearchResults';
import DetailsCard from './Components/Modules/DetailsCard';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import App from './App';


// const setup = () => {
//   const app = render(<App />);
//   userEvent.click(app.getByPlaceholderText('Search...'));
//   const searchedFish = '';
//   const clickFish = app.getByText(searchedFish);
//   // const fishInput = app.getByLabelText('searchbar')

//   return {
//     // fishInput,
//     clickFish
//   }
// }
global.window = { location: { pathname: `http://localhost:3000?fish?id=39` } };

describe('Input value', () => {
  it('updates on change', () => {
    const setSearch = jest.fn((value) => {})
    
    const { queryByPlaceholderText } = render(<Router><App><SearchResult setSearch={setSearch}/></App></Router>)

    const searchInput = queryByPlaceholderText('type fish name or id here')

    fireEvent.change(searchInput, { target: { value: 'rainbowfish' } })

    expect(searchInput.value).toBe('rainbowfish')
  })
// })

// xdescribe('Can see Fish ID', () => {
  // Test to see if data was succesfully pulled form API; initial test utilized Rainbow Fish; ID: 39
  test('Should pull Fish ID', () => {
    expect(screen.get(fish.id)).toBe(39)
  })
})
  // // Test for Fish Icon
  // test('Should load Fish Icon', () => {
  //   // Took code from StackOverflow -- unsure if this will work
  //   expect(screen.get('fishIcon')).should('have.attr', 'src').should('include' 'https://acnhapi.com/v1/icons/fish/39')
  // })
  // Test for Tom Nook's selling price

xdescribe('Fish Common Price', () => {
  test('', () => {
    expect(screen.get(fish.price)).toBe(800)
  })
})
xdescribe('Fish CJ Price', () => {
  // Test for CJ's selling price
  test('', (props) => {
    expect(screen.get(`${props.fish['price-cj']}`)).toBe(1200)
  })
})
xdescribe('Fish Location', () => {
  // Test for Location
  test('', () => {
    expect(screen.get(fish.availability.location)).toBe('River')
  })
})
  // Test for Time of Day
xdescribe('Fish Time of Day', () => {
  test('', () => {
    expect(screen.get(fish.availability.time)).toBe('9am - 4pm')
  })
})
xdescribe('Fish Shadow Size', () => {
  // Test for Shadow Size
  test('', () => {
    expect(screen.get(fish.shadow)).toBe('Smallest (1)')
  })
})
xdescribe('Fish Seasonal Data', () => {
  // Test for Seasonal Appearance
  test('Fish Seasonal Data', () => {
    expect(screen.get(`${fish.availability['month-array-northern']}`)).toBe('5-10')
    expect(screen.get(`${fish.availability['month-array-southern']}`)).toBe('11-4')
  })
})
xdescribe('Fish Catch Phrase', () => {
  // Test for Catch Phrase
  test('', () => {
    expect(screen.get(`${props.fish['catch-phrase']}`)).toBe("I caught a rainbowfish! Where's my pot of goldfish?")
  })
})
xdescribe('Fish Museum Info', () => {
  // Test for Museum Info
  test('', () => {
    expect(screen.get(`${props.fish['museum-phrase']}`)).toBe(`The rainbowfish is a tropical fish known for its metallic colors and beautiful fins. There are over 50 different species, each unique and pleasing color. I must say, it does make me wish for feathers of a more exciting hue than "underbaked brownie."`)
  })
})
xdescribe('Fish Rarity', () => {
  // Test for Rarity
  test('', () => {
    expect(screen.get(fish.availability.rarity)).toBe('Common (1)')
  })
})
  // // Test for 
  // test('', () => {
  //   expect(screen.get('')).toBe()
  // })
//})