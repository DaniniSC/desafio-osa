$(document).ready(function(){
	//Variable con info de cada App
	var contentApp = [
		{
			name: 'Sodimac',
			title: 'GUÍATE, SOLICITA, ENCUENTRA',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: 'src/img/smp-sodimac.png',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat recusandae alias voluptatum nam minus rerum cumque doloribus nulla aliquid repudiandae labore culpa minima, unde quasi officia, harum enim necessitatibus. Atque.</p><p class="textApp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cum debitis architecto optio! Atque voluptatem suscipit error. Voluptatum veritatis porro dignissimos reiciendis officiis saepe perferendis qui, tenetur, cupiditate, quam labore.</p><p class="textApp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum reiciendis totam corporis animi nesciunt blanditiis unde error ab voluptates alias ullam, repellat itaque temporibus nobis nam, architecto quae ratione quis.',
			textResultados: '<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>',
			textBeneficios: '<li>Quae ea, ipsa magni dicta veritatis ex architecto necessitatibus dolorum sapiente, nemo corporis in cupiditate eligendi rerum eius excepturi accusantium!</li>'
		},
		{
			name: 'Chile es Mar',
			title: 'CONOCE Y APRENDE',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			img: 'src/img/smp-chileesmar.png',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat recusandae alias voluptatum nam minus rerum cumque doloribus nulla aliquid repudiandae labore culpa minima, unde quasi officia, harum enim necessitatibus. Atque.</p><p class="textApp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cum debitis architecto optio! Atque voluptatem suscipit error. Voluptatum veritatis porro dignissimos reiciendis officiis saepe perferendis qui, tenetur, cupiditate, quam labore.</p><p class="textApp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum reiciendis totam corporis animi nesciunt blanditiis unde error ab voluptates alias ullam, repellat itaque temporibus nobis nam, architecto quae ratione quis.',
			textResultados: '<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>',
			textBeneficios: '<li>Quae ea, ipsa magni dicta veritatis ex architecto necessitatibus dolorum sapiente, nemo corporis in cupiditate eligendi rerum eius excepturi accusantium!</li>'
		},
		{
			name: 'OSA',
			title: 'COMUNICA, COORDINA Y CONTROLA',
			subtitle: '"OSA es una aplicación móvil que sirve como herramienta para alcanzar la excelencia en las salas de venta".',
			img: 'src/img/smp-osa.png',
			text: 'OSA es una aplicación móvil que sirve como herramienta para alcanzar la excelencia en las salas de venta. Trabaja en tiempo real desde los smartphones, tablets o notebooks de sus usuarios, en forma simple y efectiva para ellos.</p><p class="textApp">OSA utiliza la tecnología móvil aprovechando su precisión y velocidad para informar a los tomadores de decisiones, con el objetivo de aumentar las ventas en el Retail.</p><p class="textApp">OSA app comunica, coordina y controla las tareas del equipo de trabajo de una compañía. Utilizando listas rutinarias, caminatas de tienda o visitas, OSA permite la creación de tareas, con información precisa, las que se dirigen a los responsables en forma inmediata con mensajes de aviso. Los ejecutores pueden informar de la ejecución de las tareas o de la no posibilidad de hacerlo, en forma sencilla e inmediata.',
			textResultados: '<li>Aumento del Net promoter Score</li><li>Aumento de las Ventas</li><li>Aumento de la Productividad</li>',
			textBeneficios: '<li>Equipos informados y coordinados</li><li>Visualización de datos de productividad</li>'
		},
		{
			name: 'Stornote',
			title: 'TRABAJA EN TIEMPO REAL',
			subtitle: '"StorNote® es una empresa chilena del holding BWG Chile S.A. que se enfoca en la creación de soluciones para el trabajo en terreno".',
			img: 'src/img/smp-stornote.png',
			text: 'StorNote es una aplicación móvil que sirve como herramienta para los equipos de trabajo en terreno. Trabaja en tiempo real desde los smartphones, tablets o notebooks de sus usuarios, en forma simple y efectiva para ellos.</p><p class="textApp">StorNote utiliza la tecnología móvil aprovechando su precisión y velocidad para informar a los tomadores de decisiones, con el objetivo de reportar informes en el terreno de trabajo.</p><p class="textApp">Stornote app comunica, coordina y controla las tareas del equipo de trabajo de una compañía. Utilizando listas rutinarias, caminatas de tienda o visitas, OSA permite la creación de tareas, con información precisa, las que se dirigen a los responsables en forma inmediata con mensajes de aviso. Los ejecutores pueden informar de la ejecución de las tareas o de la no posibilidad de hacerlo, en forma ssencilla e inmediata.',
			textResultados: '<li>Esquematización y organización de reportes</li><li>Aumento de la productividad</li>',
			textBeneficios: '<li>Administración informada en tiempo real</li>'
		}
	];

	//Info que va por defecto en inicio - Sodimac
	$('.imgSodimac').addClass('border-top');
	$('.titleApp').empty().append(contentApp[0].title);
	$('.subtitleApp').empty().append(contentApp[0].subtitle);
	$('#imgApp').empty().append('<img src="' + contentApp[0].img + '">');
	$('.textApp').empty().append(contentApp[0].text);
	$('.textResultados').empty().append(contentApp[0].textResultados);
	$('.textBeneficios').empty().append(contentApp[0].textBeneficios);

	//función click en Sodimac
	$('#selectSodimac').click(function(){
		$('.divLogos').removeClass('border-top');
		$('.imgSodimac').addClass('border-top');
		$('.titleApp').empty().append(contentApp[0].title);
		$('.subtitleApp').empty().append(contentApp[0].subtitle);
		$('#imgApp').empty().append('<img src="' + contentApp[0].img + '">').removeClass('order1');
		$('.textApp').empty().append(contentApp[0].text);
		$('.textResultados').empty().append(contentApp[0].textResultados);
		$('.textBeneficios').empty().append(contentApp[0].textBeneficios);
	});

	//función click en Chile Es Mar
	$('#selectChileEsMar').click(function(){
		$('.divLogos').removeClass('border-top');//Remover border top (en caso de que se haya seleccionado uno anteriomente)
		$('.imgChileEsMar').addClass('border-top');//Agregar border top en section elegida
		$('.titleApp').empty().append(contentApp[1].title);//Reemplaza título
		$('.subtitleApp').empty().append(contentApp[1].subtitle);//Reemplaza subtítulo
		$('#imgApp').empty().append('<img src="' + contentApp[1].img + '">').addClass('order1');//Reemplaza img y le da la posición respecto al texto (izquierda o derecha)
		$('.textApp').empty().append(contentApp[1].text);//Reemplaza párrafos
		$('.textResultados').empty().append(contentApp[1].textResultados);//Reemplaza resultados
		$('.textBeneficios').empty().append(contentApp[1].textBeneficios);//Reemplaza beneficios
	});

	//función click en Osa
	$('#selectOsa').click(function(){
		$('.divLogos').removeClass('border-top');
		$('.imgOsaStornote').addClass('border-top');
		$('.titleApp').empty().append(contentApp[2].title);
		$('.subtitleApp').empty().append(contentApp[2].subtitle);
		$('#imgApp').empty().append('<img src="' + contentApp[2].img + '">').removeClass('order1');
		$('.textApp').empty().append(contentApp[2].text);
		$('.textResultados').empty().append(contentApp[2].textResultados);
		$('.textBeneficios').empty().append(contentApp[2].textBeneficios);
	});

	//función click en Stornote
	$('#selectStornote').click(function(){
		$('.divLogos').removeClass('border-top');
		$('.imgOsaStornote').addClass('border-top');
		$('.titleApp').empty().append(contentApp[3].title);
		$('.subtitleApp').empty().append(contentApp[3].subtitle);
		$('#imgApp').empty().append('<img src="' + contentApp[3].img + '">').addClass('order1');
		$('.textApp').empty().append(contentApp[3].text);
		$('.textResultados').empty().append(contentApp[3].textResultados);
		$('.textBeneficios').empty().append(contentApp[3].textBeneficios);
	});
});