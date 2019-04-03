# twitch streaming service clone
A [Twitch.tv](https://twitch.tv) single page application clone build using React and Redux. Project is comprised of 3 packages: a react powered webpage component, a json-server component, and a rtmpserver component.

# Link To Site
[No site currently available](#)

# Set up
* Clone or download the files
* `cd` into each of the directore and run `npm install` to download the required packages and dependencies.
** `/client`
** `/server`
** `/rtmpserver`
* Run `npm start` to load page in each of the following directories for the following:
** `client`: React client and web interface
** `server`: json-server which stores the list of streams
** `rtmpserver`: server to host and send the streams to the website.


# Usage
Upon running `npm start` the webpage `http://localhost:3000/` should open as a part of the `create-react-app` functionality. 
Site will have a sign up page to log in (with your Google account) to create and view available streams.

## Adding a stream
*Instructions baseed off instructions from [https://github.com/illuspas/Node-Media-Server](Node Media Server)*
* If using recording/streaming software like OBS, in the Settings -> Stream menu, set the following:
** Stream Type : Select "Custom Streaming Server"
** URL : type in the following without quotes "rtmp://localhost/live"
** Stream key : the ID# of the stream according to the URL

# Bugs/errors
tbd

# Technologies/libraries used
* React
* Redux
* [Semantic-UI](https://semantic-ui.com/)

# Credits
* [Modern React Redux](https://www.udemy.com/react-redux/) for creating the assignment.

# License
The MIT License (MIT)

Copyright (c) 2019 Ricky Lu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.