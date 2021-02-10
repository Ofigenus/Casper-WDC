<? if ($_GET['status'] == 'success') { ?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>Страница благодарности формы обратной связи</title>
	<link rel="stylesheet" href="./css/style.css">
	<!-- <meta http-equiv="Refresh" content="4; URL=/"> -->
</head>

<body>
	<div class="thank-you-page">

		<h1 class="thank-you-page__title">Страница благодарности</h1>
		<p class="thank-you-page__descriptor">Оформляйте как вам будет угодно</p>
		<a class="thank-you-page__button" href="/">Вернуться на главную</a>

	</div>

</body>

</html>

<? } else {
    header ("Location: /"); // главная страница вашего лендинга
} ?>