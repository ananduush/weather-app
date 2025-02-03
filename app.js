import axios from "axios";
import fs from "fs";

async function getWeather() {
  try {
    const response = await axios({
      method: "get",
      url: "http://api.weatherstack.com/current?access_key=0ebfc65e76db680316334dc868fb5649&query=47.886398,106.905746",
      responseType: "json",
    }).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.error(error);
  }
}

getWeather();
