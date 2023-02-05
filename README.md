# GCF Assignment

## How to build the app

1. Download app or repository to your local environment.
2. Run `npm install` in terminal (make sure your run command in project folder). This will deploy all needed plugins for the project.
4. Run `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Note: When I was developing this project, I had `node.js` `v18.14.0` version.

## Developer notes

This GCF project has 2 main views - `projects` and `projects:id` view. Each of these shows different interface.\
App is using:
- some Redux for state management of the json data
- plugin `react-apexcharts` [https://www.npmjs.com/package/react-apexcharts](https://www.npmjs.com/package/react-apexcharts) for charts
- images directly from [https://www.greenclimate.fund/](https://www.greenclimate.fund/) - missing images are replaced by default image

In app there is some mobile optimisation, but just symbolic to show a process of optimisation. Reasoning: time restrictions.\
App does not contain tests. Reasoning: time restrictions.

