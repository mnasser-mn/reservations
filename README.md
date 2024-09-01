
# Project Documentation

## Overview
This project is a React application designed to manage and display a list of reservations. The app includes features for filtering, sorting, and searching through the reservation data.

## Key Features
1. **Filtering**:
   - Implemented filtering by status, shift, area, and date.
   - Filters are encapsulated within a dedicated `FiltersControl` component, which manages the filtering logic separately from the reservation list.

2. **Sorting**:
   - Added sorting functionality for guest name and guest count.
   - Created a `SortControls` component that allows users to choose the sorting field and direction (ascending/descending).
   - Integrated sorting logic within the custom hook (`useGetReservations`) to ensure the reservation list is sorted based on user input.

3. **Search**:
   - Developed a `Search` component with debounced input to handle search queries efficiently.
   - Implemented validation in the search to allow only alphabetic characters and spaces.
   - Search input dynamically filters the reservation list based on customer names.

4. **Custom Hook**:
   - Built a custom hook `useGetReservations` to handle data fetching, filtering, sorting, and searching.
   - The hook returns a stateful list of reservations that updates automatically based on changes to filters, sort options, or search keywords.

5. **Styling**:
   - Used CSS modules to avoid style interference.
   - Used CSS for styling the components, maintaining a consistent and responsive layout.
   - Applied a flexbox layout to manage the structure, ensuring the reservation list is scrollable while keeping the search and control components sticky.

## Project Structure
- **Components**: Organized reusable components like `Search`, `FiltersControl`, `SortControls`,`SortingField` and `ReservationList`.
- **Custom Hooks**: Encapsulated logic related to reservations within the `useGetReservations` hook to promote reusability and separation of concerns.
- **Data**: Managed reservation data through a mock JSON file and used `useRef` for efficient data handling within the hook.

## Development Process
- **State Management**: Leveraged React’s `useState` and `useEffect` hooks to manage and react to changes in the app's state.
- **Performance**: Utilized `useMemo` to optimize the performance of filtering and sorting operations, avoiding unnecessary computations.
- **Error Handling**: Added error handling within the custom hook to manage potential issues during data processing.

