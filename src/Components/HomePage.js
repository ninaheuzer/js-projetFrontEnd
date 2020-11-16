//import PhaserGame from "./PhaserGamePage.js";
import { setLayout } from "../utils/render.js";
let homePage = `
<header>
<div class="container-fluid">
  <svg id="f6fc28af-aa11-4800-879f-8dc928d86110" class="title" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1280 738">
    <title>title</title>
    <path
      d="M441.93,348.4a25.85,25.85,0,0,1-11-1.82h0a31,31,0,0,1-7.53-4.27,30.6,30.6,0,0,1-6.56-7.09,27.64,27.64,0,0,1-2.53-4.66,25.49,25.49,0,0,1-1.81-6.23c-2.17-13.81,7.67-24.31,10.66-27.52,9.95-10.62,29.85-20.61,42.23-13.34a16.14,16.14,0,0,1,1.58,1.06c12.19,9.2,8.06,32.43.24,45.5C465.21,333.39,456.75,347.54,441.93,348.4Z" />
    <path
      d="M441.93,348.4a25.85,25.85,0,0,1-11-1.82h0a95.23,95.23,0,0,0,8-7.24c1.22-1.24,2.48-2.59,3.75-4a93.64,93.64,0,0,0,22.74-51.83,16.14,16.14,0,0,1,1.58,1.06c12.19,9.2,8.06,32.43.24,45.5C465.21,333.39,456.75,347.54,441.93,348.4Z"
      opacity="0.1" />
    <path
      d="M201.76,459.77q-11.2-12-11.2-39.93,0-22.17,7.5-47.74t24.09-43.83Q238.72,310,264.29,310q15.84,0,25.56,7t9.72,21.33q0,9.09-3.59,14.26t-11.2,5.18a14.66,14.66,0,0,1-12-5.49q3.79-1.9,6.76-7.61a25.38,25.38,0,0,0,3-11.83,13.82,13.82,0,0,0-3.07-9.29q-3.06-3.6-9.82-3.59-11.2,0-21.34,15.31t-16.37,38.55a173,173,0,0,0-6.23,44.79q0,16.05,5.49,24.5T251,451.53A49.22,49.22,0,0,0,274,446a53.32,53.32,0,0,0,18.16-15.63l4.86,2.11A55.76,55.76,0,0,1,281.4,454.7a70,70,0,0,1-44.57,17.11Q213,471.81,201.76,459.77Z"
      fill="#171712" />
    <path
      d="M348.89,462.83q-6-6.85-6-17a54.33,54.33,0,0,1,1.06-10q1.05-5.6,2.21-10.88c.78-3.51,1.3-5.77,1.59-6.76q1.68-7.38,3.17-14.57A60.92,60.92,0,0,0,352.38,392q0-10.77-7.61-10.77-5.49,0-9.72,5.38a41.44,41.44,0,0,0-6.76,14.05l-14.36,67.81H283.51l30.63-143.64,31.26-4.23L334,373.79Q344.56,362,358.71,362q10.77,0,17.11,5.92t6.34,17.95a70.67,70.67,0,0,1-1.48,13.63q-1.47,7.5-4.22,18.27-1.69,6.56-3.07,12.78a49,49,0,0,0-1.37,9.83,10,10,0,0,0,1.9,6.54c1.27,1.56,3.45,2.33,6.55,2.33a12.53,12.53,0,0,0,10.14-4.54q3.81-4.55,7.61-14.05h8.87q-7.81,23.24-18.06,31.16T367.8,469.7Q354.9,469.7,348.89,462.83Z"
      fill="#171712" />
    <path
      d="M402.76,463.36q-6.24-6.33-6.24-19a73.78,73.78,0,0,1,1.69-13.73l14.37-67.81H443l-15.21,71.82a25.87,25.87,0,0,0-.85,6.76q0,4.23,2,6c1.34,1.2,3.55,1.8,6.65,1.8q6.13,0,11.41-5.18a29.69,29.69,0,0,0,7.61-13.41h8.87q-7.82,22.81-20.07,30.95t-24.29,8.13Q409,469.7,402.76,463.36Z"
      fill="#171712" />
    <path
      d="M460.53,461.57q-8.67-8.13-8.66-25.46,0-14.58,5.81-32.11a75.91,75.91,0,0,1,18.59-30.31q12.78-12.78,32.42-12.78,12.68,0,18.06,5.49a19.05,19.05,0,0,1,5.39,13.94q0,7.4-3.17,11.41a9.79,9.79,0,0,1-8,4,13.35,13.35,0,0,1-7.39-2.53,37,37,0,0,0,2.54-12.47,11.76,11.76,0,0,0-1.48-6.33,4.93,4.93,0,0,0-4.44-2.33q-6.33,0-12.67,10.35a96.33,96.33,0,0,0-10.35,25.14,102.56,102.56,0,0,0-4,26.62q0,10.35,3.59,14.05T498.34,452q11.42,0,19.54-5.28t17.85-16.05h7.18q-23.45,39.08-58.09,39.08Q469.19,469.7,460.53,461.57Z"
      fill="#171712" />
    <path
      d="M595.3,463.47q-6.76-6.24-6.76-17.85a52.42,52.42,0,0,1,1.27-11l1.69-8.24a34.19,34.19,0,0,0,.84-7.81q0-10.14-7.6-10.14a15.43,15.43,0,0,0-7.08,1.9,50,50,0,0,0-8.55,5.91l-11,52.18H527.7l30.63-143.64,31.27-4.23-15.85,74.36,40.77-32.11h20.92l-42.25,29.36a27.12,27.12,0,0,1,7-.84q11.4,0,17.32,7T623.4,416a35.27,35.27,0,0,1-.85,8l-2.32,10.56a25.43,25.43,0,0,0-1.06,6.76q0,7.82,8.24,7.82a12.56,12.56,0,0,0,10.14-4.54q3.8-4.55,7.6-14.05H654q-13.11,39.08-38.87,39.08Q602.05,469.7,595.3,463.47Z"
      fill="#171712" />
    <path
      d="M660.68,514.8a20.66,20.66,0,0,1-7.5-16.37q0-9.3,4.65-15.21a31.68,31.68,0,0,1,12-9.3,167.23,167.23,0,0,1,19.85-7.18l2.12-9.29q-10.79,12.26-25.78,12.25-10.12,0-16.37-6.34t-6.23-19a73.78,73.78,0,0,1,1.69-13.73l14.37-67.81h30.42l-15.21,71.82a21.33,21.33,0,0,0-.64,5.28q0,9.3,6.34,9.3a12.91,12.91,0,0,0,10.14-5q4.21-5,6.76-13.62l14.36-67.81h30.63L716.55,485.33q-4.23,20.28-14.89,28.1a39,39,0,0,1-23.55,7.81A25.94,25.94,0,0,1,660.68,514.8Zm19.75-16.27q3.38-3.9,5.28-12.57l2.54-12.46q-11.21,3.81-17.33,8.87a16.23,16.23,0,0,0-6.12,13.1,6.33,6.33,0,0,0,2.53,4.75,8.7,8.7,0,0,0,5.92,2.22C675.78,502.44,678.18,501.14,680.43,498.53Z"
      fill="#171712" />
    <path
      d="M790.91,334.08l31.26-4.23-15,70.56q10.14-.84,18.7-8.87a55.94,55.94,0,0,0,13.41-19.86,60.83,60.83,0,0,0,4.86-23.24q0-12.68-6.55-20.7t-19.64-8q-25.79,0-40.25,13.51t-14.47,37.82q0,7.81,1.48,10.88a18.11,18.11,0,0,1,1.48,3.48q-11.4,0-17-4.75t-5.6-15.74q0-13.51,11.09-26.3t28.41-20.7A82.73,82.73,0,0,1,817.74,310q16.68,0,27.88,5.7t16.58,15.11a41.09,41.09,0,0,1,5.39,20.8,53.35,53.35,0,0,1-7.5,26.83,59.06,59.06,0,0,1-21.44,21.44q-13.95,8.36-32.11,8.35h-1.06l-12.88,60.2H762.18Z"
      fill="#171712" />
    <path
      d="M868.64,461.46q-8-8.23-8-25.77a96.62,96.62,0,0,1,6.23-32.85,75.58,75.58,0,0,1,18.59-29.15,40.94,40.94,0,0,1,29.47-11.94q8.65,0,12.88,3a9.12,9.12,0,0,1,4.23,7.82V374l2.32-11.19h30.42l-15.21,71.82a26.3,26.3,0,0,0-.84,6.76q0,9.09,8.66,9.09,5.91,0,10.24-5.5a41.31,41.31,0,0,0,6.87-14.36h8.87q-7.82,22.81-19.33,30.95t-23.13,8.13q-8.86,0-14.26-5t-6.44-14.47a59,59,0,0,1-13.63,14.05,29.79,29.79,0,0,1-17.85,5.39A26.91,26.91,0,0,1,868.64,461.46Zm44.26-17.22q5.18-5,7.08-13.62l10.14-47.74a8.58,8.58,0,0,0-2.12-5.39c-1.4-1.76-3.59-2.64-6.54-2.64q-8.46,0-15.21,9.82a77.88,77.88,0,0,0-10.57,23.66q-3.79,13.85-3.8,24.4t3.06,13.52a10.41,10.41,0,0,0,7.5,3Q907.72,449.21,912.9,444.24Z"
      fill="#171712" />
    <path
      d="M979,463.36q-6.24-6.33-6.24-19a73.08,73.08,0,0,1,1.7-13.73l14.36-67.81h30.42l-15.21,71.82a21.81,21.81,0,0,0-.63,5.28q0,9.3,6.33,9.3a12.91,12.91,0,0,0,10.14-5q4.23-5,6.76-13.62L1041,362.81h30.42l-15.21,71.82a43.87,43.87,0,0,0-1.06,7.61q0,7,7.18,7,9.72,0,18.06-12.25a105,105,0,0,0,13.42-29.16q5.07-16.89,5.07-29.15c-.29.71-1.2,1.24-2.75,1.59a18.59,18.59,0,0,1-4,.52,6.21,6.21,0,0,1-5.6-3.38,14.17,14.17,0,0,1-2-7.39,10.94,10.94,0,0,1,3.28-8.24q3.27-3.17,9.82-3.17,7,0,10.14,5.18t3.17,13.2q0,19-6.55,40.67t-20.07,36.86q-13.52,15.21-33.59,15.21-10.35,0-16.9-4.44T1025.38,452q-11.82,17.74-30,17.75Q985.25,469.7,979,463.36Z"
      fill="#171712" />
    <path
      d="M880.88,321.93c11.37-23.94,6.12-49.41-12-58s-41.14,3.44-52.51,27.38-6.11,49.41,12,58S869.51,345.86,880.88,321.93Z"
      fill="#171712" />
    <path
      d="M937.77,316.82c24.5,11.65,57.14-5.64,72.76-38.53s8.4-69.11-16.1-80.75-57.15,5.65-72.77,38.54S913.26,305.19,937.77,316.82Z"
      fill="#171712" />
    <path
      d="M1047.94,367.36c23.89,11.35,55.74-5.5,71-37.59s8.19-67.42-15.7-78.77-55.76,5.51-71,37.59S1024,356,1047.94,367.36Z"
      fill="#171712" />
    <path
      d="M1138.32,391.9c-18.08-8.59-41.13,3.44-52.5,27.38s-6.12,49.4,12,58,41.15-3.44,52.51-27.36S1156.4,400.48,1138.32,391.9Z"
      fill="#171712" />
    <path
      d="M1045.16,462.06a25.88,25.88,0,0,1-.63-4.51c.17-26.13-15.24-64.34-59.31-86l-1.7-.82c-43.68-20.75-82.2-9.79-103.69,7.4a18.53,18.53,0,0,1-3.41,1.82,42.17,42.17,0,0,0-4.77,2.46c-16,9.93-28.3,23.79-34.69,39-6.8,16.19-6.21,32.06,1.62,44.68a29.52,29.52,0,0,0,12.56,11.36c10.64,5.06,23.24,3.69,37.83,2.11,9.28-1,18.87-2.06,28.73-1.56,1.07.13,5.07,1.47,11.26,4.41,7.36,3.49,12.33,6.66,13.28,7.58,6.35,7.37,11.21,15.38,15.9,23.13,7.2,11.87,14,23.08,24.72,28.18a29.47,29.47,0,0,0,15,2.7c29.5-2.16,51.13-36.27,48.21-76A48.87,48.87,0,0,0,1045.16,462.06Z"
      fill="#171712" />
    <path
      d="M195.26,453.92q-11.2-12-11.2-39.93,0-22.17,7.5-47.74t24.09-43.83q16.57-18.27,42.14-18.27,15.84,0,25.56,7t9.72,21.33q0,9.09-3.59,14.26t-11.2,5.18a14.66,14.66,0,0,1-12-5.49q3.79-1.9,6.76-7.61A25.38,25.38,0,0,0,276,327a13.82,13.82,0,0,0-3.07-9.29q-3.06-3.6-9.82-3.59-11.2,0-21.34,15.31t-16.37,38.55a173,173,0,0,0-6.23,44.79q0,16,5.49,24.5t19.86,8.45a49.22,49.22,0,0,0,23-5.49,53.32,53.32,0,0,0,18.16-15.63l4.86,2.11a55.76,55.76,0,0,1-15.63,22.18A70,70,0,0,1,230.33,466Q206.45,466,195.26,453.92Z"
      fill="#f9f1f1" />
    <path
      d="M342.39,457q-6-6.86-6-17a54.33,54.33,0,0,1,1.06-10q1.05-5.6,2.21-10.88c.78-3.51,1.3-5.77,1.59-6.76q1.68-7.38,3.17-14.57a60.92,60.92,0,0,0,1.48-11.62q0-10.77-7.61-10.77-5.49,0-9.72,5.38a41.44,41.44,0,0,0-6.76,14l-14.36,67.81H277l30.63-143.64,31.26-4.23-11.4,53.23q10.56-11.82,24.71-11.83,10.77,0,17.11,5.92t6.34,18a70.67,70.67,0,0,1-1.48,13.63q-1.47,7.5-4.22,18.27-1.69,6.56-3.07,12.78a49,49,0,0,0-1.37,9.83,10,10,0,0,0,1.9,6.54q1.9,2.33,6.55,2.33a12.53,12.53,0,0,0,10.14-4.54q3.81-4.54,7.61-14.05h8.87q-7.81,23.24-18.06,31.16t-21.23,7.92Q348.4,463.85,342.39,457Z"
      fill="#f9f1f1" />
    <path
      d="M396.26,457.51q-6.24-6.33-6.24-19a73.78,73.78,0,0,1,1.69-13.73L406.08,357H436.5l-15.21,71.82a25.87,25.87,0,0,0-.85,6.76q0,4.23,2,6c1.34,1.2,3.55,1.8,6.65,1.8q6.13,0,11.41-5.18a29.69,29.69,0,0,0,7.61-13.41H457q-7.82,22.82-20.07,31t-24.29,8.13Q402.49,463.85,396.26,457.51Z"
      fill="#f9f1f1" />
    <path
      d="M454,455.72q-8.67-8.13-8.66-25.46,0-14.58,5.81-32.11a75.91,75.91,0,0,1,18.59-30.31q12.78-12.78,32.42-12.78,12.68,0,18.06,5.49a19.05,19.05,0,0,1,5.39,13.94q0,7.39-3.17,11.41a9.79,9.79,0,0,1-8,4,13.35,13.35,0,0,1-7.39-2.53,37,37,0,0,0,2.54-12.47,11.76,11.76,0,0,0-1.48-6.33,4.93,4.93,0,0,0-4.44-2.33q-6.33,0-12.67,10.35a96.33,96.33,0,0,0-10.35,25.14,102.56,102.56,0,0,0-4,26.62q0,10.35,3.59,14.05t11.62,3.69q11.42,0,19.54-5.28t17.85-16.05h7.18Q513,463.85,478.32,463.85,462.69,463.85,454,455.72Z"
      fill="#f9f1f1" />
    <path
      d="M588.8,457.62Q582,451.38,582,439.77a52.42,52.42,0,0,1,1.27-11l1.69-8.24a34.19,34.19,0,0,0,.84-7.81q0-10.14-7.6-10.14a15.43,15.43,0,0,0-7.08,1.9,50,50,0,0,0-8.55,5.91l-11,52.18H521.2l30.63-143.64,31.27-4.23-15.85,74.36L608,357h20.92l-42.25,29.36a27.12,27.12,0,0,1,7-.84q11.4,0,17.32,7t5.92,17.74a35.27,35.27,0,0,1-.85,8l-2.32,10.56a25.43,25.43,0,0,0-1.06,6.76q0,7.81,8.24,7.82a12.56,12.56,0,0,0,10.14-4.54q3.8-4.54,7.6-14.05h8.88q-13.11,39.08-38.87,39.08Q595.55,463.85,588.8,457.62Z"
      fill="#f9f1f1" />
    <path
      d="M654.18,509a20.66,20.66,0,0,1-7.5-16.37q0-9.3,4.65-15.21a31.68,31.68,0,0,1,12-9.3,167.23,167.23,0,0,1,19.85-7.18l2.12-9.29q-10.79,12.25-25.78,12.25-10.12,0-16.37-6.34t-6.23-19a73.78,73.78,0,0,1,1.69-13.73L653,357h30.42l-15.21,71.82a21.33,21.33,0,0,0-.64,5.28q0,9.3,6.34,9.3a12.91,12.91,0,0,0,10.14-5q4.21-5,6.76-13.62L705.19,357h30.63L710.05,479.48q-4.23,20.28-14.89,28.1a39,39,0,0,1-23.55,7.81A25.94,25.94,0,0,1,654.18,509Zm19.75-16.27q3.38-3.9,5.28-12.57l2.54-12.46q-11.21,3.81-17.33,8.87a16.23,16.23,0,0,0-6.12,13.1,6.33,6.33,0,0,0,2.53,4.75,8.7,8.7,0,0,0,5.92,2.22C669.28,496.59,671.68,495.29,673.93,492.68Z"
      fill="#f9f1f1" />
    <path
      d="M784.41,328.23,815.67,324l-15,70.56q10.14-.84,18.7-8.87a55.94,55.94,0,0,0,13.41-19.86,60.83,60.83,0,0,0,4.86-23.24q0-12.68-6.55-20.7t-19.64-8q-25.79,0-40.25,13.51T756.73,365.2q0,7.82,1.48,10.88a18.11,18.11,0,0,1,1.48,3.48q-11.4,0-17-4.75t-5.6-15.74q0-13.51,11.09-26.3t28.41-20.7a82.73,82.73,0,0,1,34.65-7.92q16.68,0,27.88,5.7T855.7,325a41.09,41.09,0,0,1,5.39,20.8,53.35,53.35,0,0,1-7.5,26.83A59.06,59.06,0,0,1,832.15,394q-13.95,8.36-32.11,8.35H799l-12.88,60.2H755.68Z"
      fill="#f9f1f1" />
    <path
      d="M862.14,455.61q-8-8.24-8-25.77A96.62,96.62,0,0,1,860.35,397a75.58,75.58,0,0,1,18.59-29.15,40.94,40.94,0,0,1,29.47-11.94q8.65,0,12.88,3a9.12,9.12,0,0,1,4.23,7.82v1.47L927.84,357h30.42l-15.21,71.82a26.3,26.3,0,0,0-.84,6.76q0,9.09,8.66,9.09,5.91,0,10.24-5.5A41.31,41.31,0,0,0,968,424.77h8.87q-7.82,22.82-19.33,31t-23.13,8.13q-8.86,0-14.26-5t-6.44-14.47a59,59,0,0,1-13.63,14,29.79,29.79,0,0,1-17.85,5.39A26.91,26.91,0,0,1,862.14,455.61Zm44.26-17.22q5.18-5,7.08-13.62L923.62,377a8.58,8.58,0,0,0-2.12-5.39c-1.4-1.76-3.59-2.64-6.54-2.64q-8.46,0-15.21,9.82a77.88,77.88,0,0,0-10.57,23.66q-3.79,13.84-3.8,24.4t3.06,13.52a10.41,10.41,0,0,0,7.5,3Q901.22,443.36,906.4,438.39Z"
      fill="#f9f1f1" />
    <path
      d="M972.52,457.51q-6.24-6.33-6.24-19a73.08,73.08,0,0,1,1.7-13.73L982.34,357h30.42l-15.21,71.82a21.81,21.81,0,0,0-.63,5.28q0,9.3,6.33,9.3a12.91,12.91,0,0,0,10.14-5q4.23-5,6.76-13.62L1034.52,357h30.42l-15.21,71.82a43.87,43.87,0,0,0-1.06,7.61q0,7,7.18,7,9.72,0,18.06-12.25A105,105,0,0,0,1087.33,402q5.07-16.89,5.07-29.15c-.29.71-1.2,1.24-2.75,1.59a18.59,18.59,0,0,1-4,.52,6.21,6.21,0,0,1-5.6-3.38,14.17,14.17,0,0,1-2-7.39,10.94,10.94,0,0,1,3.28-8.24q3.27-3.16,9.82-3.17,7,0,10.14,5.18t3.17,13.2q0,19-6.55,40.67t-20.07,36.86q-13.52,15.21-33.59,15.21-10.35,0-16.9-4.44t-8.45-13.31q-11.82,17.75-30,17.75Q978.75,463.85,972.52,457.51Z"
      fill="#f9f1f1" />
    <path
      d="M436.43,345.85a27.84,27.84,0,0,1-11.89-2h0a33.53,33.53,0,0,1-8.15-4.63,32.88,32.88,0,0,1-7.1-7.68,28.52,28.52,0,0,1-2.74-5,27.58,27.58,0,0,1-2-6.75c-2.35-15,8.3-26.32,11.54-29.81,10.78-11.5,32.32-22.31,45.73-14.44a19.07,19.07,0,0,1,1.72,1.15c13.2,10,8.72,35.12.26,49.27C461.65,329.6,452.49,344.92,436.43,345.85Z"
      fill="#f9f1f1" />
    <path
      d="M436.43,345.85a27.84,27.84,0,0,1-11.89-2h0a105.11,105.11,0,0,0,8.64-7.85c1.32-1.34,2.68-2.8,4.05-4.37a101.29,101.29,0,0,0,24.63-56.13,19.07,19.07,0,0,1,1.72,1.15c13.2,10,8.72,35.12.26,49.27C461.65,329.6,452.49,344.92,436.43,345.85Z"
      opacity="0.1" />
  </svg>
</div>

<nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a href="#" class="nav-link">
        <svg id="b241cfaa-7bb2-4d59-9ee9-c5432498a7b0" class="navbar-icon" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 720 720">
          <defs>
            <radialGradient id="a170afaa-e661-4c0c-88a1-f2411dd59c02" cx="270.18" cy="271.76" r="28.7"
              gradientUnits="userSpaceOnUse">
              <stop offset="0.82" stop-color="#ef4136" />
              <stop offset="1" stop-color="#fff" />
            </radialGradient>
          </defs>
          <path
            d="M274.09,241.07l-72.63-52.65,19.19,134.63c7.79,4.49,23.51,11.83,37,6.22C278.25,320.73,290.2,283.72,274.09,241.07Z"
            fill="#ef4136" />
          <path
            d="M295.8,206.5l-63.12-63.75-2.93,136c7,5.69,21.28,15.49,35.54,12.15C287,285.78,304.77,251.2,295.8,206.5Z"
            fill="#ef4136" />
          <path
            d="M330.16,170.32q-24-37.9-47.93-75.83l-32.1,132.16c5.57,7,17.46,19.7,32.1,19.5C304.49,245.85,329.31,215.91,330.16,170.32Z"
            fill="#ef4136" />
          <path
            d="M573.88,482.91c26.06-117-70.2-294.29-214.73-293.49-138.29.77-236.62,164.06-214.06,282.05,8.41,44,36,93.8,82.12,125.87,50.67,35.21,103.66,35.08,137.32,35,34.13-.08,83.71-.2,131.26-33C541.36,568,565.63,520,573.88,482.91Z"
            fill="#fff" />
          <path
            d="M311.15,490l44.06,7.2,44.94-7.18q4.53.75,4.6,1.8c0,.29-.21.6-.68.93L359.61,521c-1.8,1.14-6,1.14-7.83,0l-44.55-28.19c-.48-.33-.71-.63-.69-.92Q306.61,490.78,311.15,490Z"
            fill="#d99737" />
          <path
            d="M400.14,497.27l-89-.07a4.6,4.6,0,0,1-3.92-7l44.46-72.41a4.6,4.6,0,0,1,7.84,0l44.54,72.48A4.59,4.59,0,0,1,400.14,497.27Z"
            fill="#fbb040" />
          <path
            d="M416.62,198.49a31.58,31.58,0,0,0-5.26-.53c-23.82-.54-44.81,22.3-54.67,55.54-8-35-28.33-60-52.73-60.52h-.58l59.5-116Z"
            fill="#ef4136" />
          <path
            d="M463.45,367.89c0,26.76-11.42,48.46-25.47,48.46s-25.53-21.7-25.53-48.46a86.21,86.21,0,0,1,1.73-17.51l37.8-23C458.87,336.06,463.45,350.92,463.45,367.89Z" />
          <path
            d="M295.68,367.89c0,26.76-11.42,48.46-25.53,48.46s-25.47-21.7-25.47-48.46c0-17,4.58-31.83,11.47-40.5l37.8,23A86.21,86.21,0,0,1,295.68,367.89Z" />
          <path
            d="M252,294.14a19.17,19.17,0,0,0-10.47-34.29l5.3-6.35A19.16,19.16,0,0,0,281.1,243l7.26,4.65A19.16,19.16,0,0,0,298.84,282l-3.58,8A19.16,19.16,0,0,0,261,300.49Z"
            fill="url(#a170afaa-e661-4c0c-88a1-f2411dd59c02)" />
        </svg>
        <span class="link-text">My Profile</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <svg id="d7a4cbc2-ead4-4a07-8689-5a915b6ae1ca" class="navbar-icon" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 720 720">
          <path
            d="M482.13,546.12a152.36,152.36,0,0,1-58.32,30.48h0a182.19,182.19,0,0,1-50.75,6.58,179.59,179.59,0,0,1-56.2-10.08,160.77,160.77,0,0,1-28.53-13,151.58,151.58,0,0,1-30.72-23c-59.41-57.46-50.36-142-47.66-167.86C219.1,283.7,277.47,165.76,361.79,156a97.55,97.55,0,0,1,11.26-.65c90.29.06,153.48,124.43,163.1,213.92C538.61,392.41,549.05,489.29,482.13,546.12Z"
            fill="#fff" />
          <path
            d="M416.19,317.58c0-29.5-14.44-46.34-42.63-46.34s-42.62,16.84-42.62,46.34v18.17h27.32v-20c0-13.18,5.27-18.16,14.5-18.16s14.49,5,14.49,18.16c0,17.59-3.66,29.74-16.61,48.13-11.29,16.1-14.95,26.86-14.95,41.59a35.24,35.24,0,0,0,1.54,11.34H383a47.86,47.86,0,0,1-1-10.25c0-11.86,3.44-20.8,14.73-36.1C410.92,351.5,416.19,337.29,416.19,317.58ZM355.91,429.71V457.6h27.91V429.71Z" />
          <path
            d="M470.2,220.75a43.29,43.29,0,0,0-14.93,38.14,43.29,43.29,0,0,0-36.44-15.1,43.28,43.28,0,0,0,11.65-40,43.23,43.23,0,0,0,39.72,16.93Z"
            fill="#fbb040" />
          <path
            d="M311.94,319.26A43.26,43.26,0,0,0,297,357.4a43.21,43.21,0,0,0-36.44-15.1,43.21,43.21,0,0,0,11.65-40,43.26,43.26,0,0,0,39.73,16.93Z"
            fill="#fbb040" />
          <path
            d="M460.89,484.69A43.29,43.29,0,0,0,446,522.83a43.26,43.26,0,0,0-36.44-15.11,43.27,43.27,0,0,0,11.65-40,43.23,43.23,0,0,0,39.72,16.93Z"
            fill="#fbb040" />
          <path
            d="M330.94,549.84A42.6,42.6,0,0,0,318.68,567a33,33,0,0,0-1.84,6.07,162.14,162.14,0,0,1-28.53-13c.35-.69.63-1.38.92-2.06a42.71,42.71,0,0,0,1.95-25.1,43.12,43.12,0,0,0,39.76,16.9Z"
            fill="#fbb040" />
          <path
            d="M482.13,546.12a152.36,152.36,0,0,1-58.32,30.48h0A573,573,0,0,0,435.65,514c1.34-10.2,2.47-21,3.31-32.38a553.9,553.9,0,0,0-10.57-156.35A555.58,555.58,0,0,0,361.79,156a97.55,97.55,0,0,1,11.26-.65c90.29.06,153.48,124.43,163.1,213.92C538.61,392.41,549.05,489.29,482.13,546.12Z"
            opacity="0.1" />
        </svg>
        <span class="link-text">About Us</span>
      </a>
    </li>
  </ul>
</nav>


</header>

<footer></footer>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
crossorigin="anonymous"></script>
<script src="anime.min.js"></script>
<script src="ChickyPaw.js"></script>
`;

const HomePage = () => {
  let page = document.querySelector("#page");
  page.innerHTML = homePage;
};

export default HomePage;
