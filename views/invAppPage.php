<!DOCTYPE html>
<html>
  <head>
    <title>Instascan</title>
    <script type="text/javascript" src="/js/instascan_fix.min.js"></script>
    <!-- <script type="text/javascript" src="/js/instascan.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <link rel="stylesheet" href="/css/index.css">
  </head>
  <body>
    <div class="center">
      <h2>發票辨識</h2>
      <button onclick="history.back()">回上一頁</button>
      <!-- <button onclick="invoiceScan()">開啟相機</button> -->
        <div class="camera-image">
            <video
                id="preview"
                autoplay="autoplay"
                playsinline=""
                width="100%"
                class="active"
            ></video>
        </div>
    </div>
    <script type="text/javascript" src="/js/invoice.js"></script>
    <!-- <script type="text/javascript" src="/js/index.js"></script> -->
  </body>
</html>
