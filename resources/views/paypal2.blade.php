

<!DOCTYPE html>

<head>
    <!-- Add meta tags for mobile and IE -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
</head>


<body>
  <script
    src="https://www.paypal.com/sdk/js?client-id=AQzd1QiuV4CP_DlRAFc3uOl6zUgu4DIboI79uVizKeAPxBRMcKw7DWRQEs-5IAyeFK4trHUJEvmYQkHF"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
  </script>

  <div id="paypal-button-container"></div>

  <script>
    paypal.Buttons().render('#paypal-button-container');
    // This function displays Smart Payment Buttons on your web page.
  </script>
</body>