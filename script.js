function fetchLyrics() {
  //mengambil nilai input dengan id input_artis
  var artist = document.getElementById("input_artist").value;
  //mengambil nilai input dengan id input_title
  var title = document.getElementById("input_title").value;
  const Http = new XMLHttpRequest();
  var url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
  var titleShow = document.getElementById("titleOutput");
  titleShow.innerHTML = title;

  var output = document.getElementById("lyricoutput");
  Http.open("GET", url); //kirim HTTP request dengan metode GET
  Http.send();

  Http.onreadystatechange = function () {
    if (this.readyState == 4) {
      var result = JSON.parse(Http.responseText);
      output.innerHTML = result.lyrics;
    }
  };
  document.getElementById("input_artist").value = "";
  document.getElementById("input_title").value = "";
}

//variabel ngambil dari id h3
//mencet button untuk output
//
