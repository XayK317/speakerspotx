# Speaker Spotlight | Circle City Dev Night

A responsive one-page React application built with Vite for **Circle City Dev Night**, a fictional monthly tech meetup in Indianapolis. This project serves as a social-media-ready speaker spotlight event page showcasing featured speakers, talk summaries, key takeaways, and event logistics.

## Project Overview

Developed as part of **NEwm N317**, this application transitions from plain JavaScript to a modern component-driven React architecture. It utilizes a modular file structure and custom CSS styling to create a professional event promo page.

## Features

* **Modular Component Architecture:** Cleanly separated into independent files (`App.jsx`, `SpeakerCard.jsx`, and `TopicList.jsx`) with proper component composition (`App` -> `SpeakerCard` -> `TopicList`).
* **Dynamic Data Rendering:** Maps through a speaker data array to render multiple distinct speaker profiles without duplicating component logic.
* **Responsive Event Promo Styling:** Custom CSS layout styled to look polished and accessible on both desktop screens and mobile devices.
* **Accessibility Focused:** Includes meaningful screen-reader `alt` text for all speaker headshots.

## Component Structure

1. **`App` (`src/App.jsx`):** The parent component containing the event header (meetup name, date, and venue), the speaker data array, and the footer linking to the GitHub repository.
2. **`SpeakerCard` (`src/components/SpeakerCard.jsx`):** Renders individual speaker headshots, names, job titles, companies, talk titles, talk summaries, and nests the `TopicList` component.
3. **`TopicList` (`src/components/TopicList.jsx`):** Displays a structured, titled list of key talk takeaways.

## Tech Stack

* **React** 
* **Vite** (Frontend build toolchain)
* **CSS3** (Custom styling and layout design)
* **Netlify** (Static site hosting and deployment)
https://deploy-preview-1--subtle-melba-b70e72.netlify.app/
