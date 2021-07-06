const AddProjectIco = ({color}) => {
	return ( <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.0656 8.00389L11.25 7.99875H18.75C20.483 7.99875 21.8992 9.3552 21.9949 11.0643L22 11.2487V18.7487C22 20.4818 20.6435 21.898 18.9344 21.9936L18.75 21.9987H11.25C9.51697 21.9987 8.10075 20.6423 8.00515 18.9332L8 18.7487V11.2487C8 9.51571 9.35646 8.0995 11.0656 8.00389ZM18.75 9.49875H11.25C10.3318 9.49875 9.57881 10.2059 9.5058 11.1052L9.5 11.2487V18.7487C9.5 19.6669 10.2071 20.4199 11.1065 20.4929L11.25 20.4987H18.75C19.6682 20.4987 20.4212 19.7916 20.4942 18.8923L20.5 18.7487V11.2487C20.5 10.2822 19.7165 9.49875 18.75 9.49875ZM15 11C15.4142 11 15.75 11.3358 15.75 11.75V14.248L18.25 14.2487C18.6642 14.2487 19 14.5845 19 14.9987C19 15.413 18.6642 15.7487 18.25 15.7487L15.75 15.748V18.25C15.75 18.6642 15.4142 19 15 19C14.5858 19 14.25 18.6642 14.25 18.25V15.748L11.75 15.7487C11.3358 15.7487 11 15.413 11 14.9987C11 14.5845 11.3358 14.2487 11.75 14.2487L14.25 14.248V11.75C14.25 11.3358 14.5858 11 15 11ZM15.5818 4.23284L15.6345 4.40964L16.327 6.998H14.774L14.1856 4.79787C13.9355 3.86431 12.9759 3.31029 12.0423 3.56044L4.79787 5.50158C3.91344 5.73856 3.36966 6.61227 3.52756 7.49737L3.56044 7.64488L5.50158 14.8893C5.69372 15.6064 6.30445 16.0996 7.00045 16.1764L7.00056 17.6816C5.69932 17.6051 4.52962 16.7445 4.10539 15.4544L4.05269 15.2776L2.11155 8.03311C1.66301 6.35913 2.6067 4.6401 4.23284 4.10539L4.40964 4.05269L11.6541 2.11155C13.3281 1.66301 15.0471 2.6067 15.5818 4.23284Z" fill={color || 'white'}/>
	</svg> );
}

const AddTaskIco = ({color}) => {
	return ( <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.25H16.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75H12.75V16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25V12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H11.25V7.75C11.25 7.33579 11.5858 7 12 7Z" fill={color || 'white'}/>
		<path d="M3 6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25ZM6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5H6.25Z" fill={color || 'white'}/>
	</svg> );
}

const DeleteIco = ({color}) => {
	return ( <svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill={color || 'white'} d="M24,7.25 C27.1017853,7.25 29.629937,9.70601719 29.7458479,12.7794443 L29.75,13 L37,13 C37.6903559,13 38.25,13.5596441 38.25,14.25 C38.25,14.8972087 37.7581253,15.4295339 37.1278052,15.4935464 L37,15.5 L35.909,15.5 L34.2058308,38.0698451 C34.0385226,40.2866784 32.1910211,42 29.9678833,42 L18.0321167,42 C15.8089789,42 13.9614774,40.2866784 13.7941692,38.0698451 L12.09,15.5 L11,15.5 C10.3527913,15.5 9.8204661,15.0081253 9.75645361,14.3778052 L9.75,14.25 C9.75,13.6027913 10.2418747,13.0704661 10.8721948,13.0064536 L11,13 L18.25,13 C18.25,9.82436269 20.8243627,7.25 24,7.25 Z M33.4021054,15.5 L14.5978946,15.5 L16.2870795,37.8817009 C16.3559711,38.7945146 17.116707,39.5 18.0321167,39.5 L29.9678833,39.5 C30.883293,39.5 31.6440289,38.7945146 31.7129205,37.8817009 L33.4021054,15.5 Z M27.25,20.75 C27.8972087,20.75 28.4295339,21.2418747 28.4935464,21.8721948 L28.5,22 L28.5,33 C28.5,33.6903559 27.9403559,34.25 27.25,34.25 C26.6027913,34.25 26.0704661,33.7581253 26.0064536,33.1278052 L26,33 L26,22 C26,21.3096441 26.5596441,20.75 27.25,20.75 Z M20.75,20.75 C21.3972087,20.75 21.9295339,21.2418747 21.9935464,21.8721948 L22,22 L22,33 C22,33.6903559 21.4403559,34.25 20.75,34.25 C20.1027913,34.25 19.5704661,33.7581253 19.5064536,33.1278052 L19.5,33 L19.5,22 C19.5,21.3096441 20.0596441,20.75 20.75,20.75 Z M24,9.75 C22.2669685,9.75 20.8507541,11.1064548 20.7551448,12.8155761 L20.75,13 L27.25,13 C27.25,11.2050746 25.7949254,9.75 24,9.75 Z" ></path>
	</svg> );
}

const EditIco = ({color}) => {
	return ( <svg style={{transform: "scale(0.9)"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path fill={color || 'white'} d="M21.0303301,2.96966991 C22.4277928,4.36713263 22.4277928,6.63286737 21.0303301,8.03033009 L9.06200371,19.9986565 C8.78512854,20.2755316 8.44079112,20.4753584 8.06302761,20.5783848 L2.94733805,21.9735729 C2.38746387,22.1262658 1.87373417,21.6125361 2.02642713,21.0526619 L3.4216152,15.9369724 C3.52464161,15.5592089 3.72446837,15.2148715 4.00134354,14.9379963 L15.9696699,2.96966991 C17.3671326,1.5722072 19.6328674,1.5722072 21.0303301,2.96966991 Z M15.0001717,6.06057288 L5.06200371,15.9986565 C4.96971199,16.0909482 4.90310306,16.2057273 4.86876093,16.3316485 L3.81891446,20.1810855 L7.6683515,19.1312391 C7.79427267,19.0968969 7.90905181,19.030288 8.00134354,18.9379963 L17.9391717,8.99957288 L15.0001717,6.06057288 Z M17.0303301,4.03033009 L16.0601717,4.99957288 L18.9991717,7.93957288 L19.9696699,6.96966991 C20.7813462,6.15799363 20.7813462,4.84200637 19.9696699,4.03033009 C19.1579936,3.21865381 17.8420064,3.21865381 17.0303301,4.03033009 Z" ></path>
	</svg> );
}

const GripIco = ({color}) => {
	return ( <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill={color || 'white'} d="M15.5 17C16.3284 17 17 17.6716 17 18.5C17 19.3284 16.3284 20 15.5 20C14.6716 20 14 19.3284 14 18.5C14 17.6716 14.6716 17 15.5 17ZM8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17ZM15.5 10C16.3284 10 17 10.6716 17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5C14 10.6716 14.6716 10 15.5 10ZM8.5 10C9.32843 10 10 10.6716 10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5C7 10.6716 7.67157 10 8.5 10ZM15.5 3C16.3284 3 17 3.67157 17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3ZM8.5 3C9.32843 3 10 3.67157 10 4.5C10 5.32843 9.32843 6 8.5 6C7.67157 6 7 5.32843 7 4.5C7 3.67157 7.67157 3 8.5 3Z" />
	</svg> );
}

const Tag = ({color, selected}) => {
	return (
		<svg className="tag" width="18" height="24">
			<circle className="outer" r="6" cx="10" cy="12" stroke="white" fill="var(--tab-bg)" fillRule="evenodd" strokeWidth={selected ? 1 : 0} ></circle>
			<circle className="inner" r="4" cx="10" cy="12" stroke="white" fill={('var(--'+ color +')') || "white"} fillRule="evenodd" strokeWidth="0" ></circle>
		</svg>
	);
}

const CheckIco = ({color, selected}) => {
	return (
		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill={color || 'white'} d="M18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 L18.25,3 Z M18.25,4.5 L5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 Z "></path>
			<path fill={selected ? (color || "white") : "transparent"} d="M10,14.4393398 L16.4696699,7.96966991 C16.7625631,7.6767767 17.2374369,7.6767767 17.5303301,7.96966991 C17.7965966,8.23593648 17.8208027,8.65260016 17.6029482,8.94621165 L17.5303301,9.03033009 L10.5303301,16.0303301 C10.2640635,16.2965966 9.84739984,16.3208027 9.55378835,16.1029482 L9.46966991,16.0303301 L6.46966991,13.0303301 C6.1767767,12.7374369 6.1767767,12.2625631 6.46966991,11.9696699 C6.73593648,11.7034034 7.15260016,11.6791973 7.44621165,11.8970518 L7.53033009,11.9696699 L10,14.4393398 L16.4696699,7.96966991 L10,14.4393398 Z"></path>
		</svg>
	);
}

const AddPeopleIco = ({color}) => {
	return (
		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill={color || 'white'} d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M4,12.999 L12.8093956,13.000184 C12.3831517,13.4443854 12.0193936,13.9490082 11.7322512,14.4999221 L4,14.499 L3.899344,14.509 C3.77496,14.53428 3.69,14.6018 3.646,14.645 C3.6028,14.689 3.53528,14.77332 3.51,14.89796 L3.5,14.999 L3.5,16.5 C3.5,17.509 3.95,18.222 4.917,18.742 C5.74315385,19.1869231 6.91950888,19.4563195 8.18257852,19.4951325 L8.5,19.5 L8.8174051,19.4951325 C9.68108507,19.4685898 10.5039049,19.3342106 11.2023508,19.1096032 C11.3264299,19.6025014 11.5082127,20.0726228 11.7390124,20.5130144 C10.6887116,20.8629701 9.53056842,21 8.5,21 C5.77786667,21 2.16469531,20.0439506 2.00545418,16.7296461 L2,16.5 L2,14.999 C2,13.895 2.896,12.999 4,12.999 Z M17.5,14.0015812 L17.4101244,14.0096369 C17.2060313,14.0466809 17.0450996,14.2076126 17.0080557,14.4117056 L17,14.5015812 L17,16.9995812 L14.5,17 L14.4101244,17.0080557 C14.2060313,17.0450996 14.0450996,17.2060313 14.0080557,17.4101244 L14,17.5 L14.0080557,17.5898756 C14.0450996,17.7939687 14.2060313,17.9549004 14.4101244,17.9919443 L14.5,18 L17,17.9995812 L17,20.5 L17.0080557,20.5898756 C17.0450996,20.7939687 17.2060313,20.9549004 17.4101244,20.9919443 L17.5,21 L17.5898756,20.9919443 C17.7939687,20.9549004 17.9549004,20.7939687 17.9919443,20.5898756 L18,20.5 L18,17.9995812 L20.5,18 L20.5898756,17.9919443 C20.7939687,17.9549004 20.9549004,17.7939687 20.9919443,17.5898756 L21,17.5 L20.9919443,17.4101244 C20.9549004,17.2060313 20.7939687,17.0450996 20.5898756,17.0080557 L20.5,17 L18,16.9995812 L18,14.5015812 L17.9919443,14.4117056 C17.9549004,14.2076126 17.7939687,14.0466809 17.5898756,14.0096369 L17.5,14.0015812 Z M8.5,2 C10.985,2 13,4.015 13,6.5 C13,8.985 10.985,11 8.5,11 C6.015,11 4,8.985 4,6.5 C4,4.015 6.015,2 8.5,2 Z M17.5,4 C19.433,4 21,5.567 21,7.5 C21,9.433 19.433,11 17.5,11 C15.567,11 14,9.433 14,7.5 C14,5.567 15.567,4 17.5,4 Z M8.5,3.5 C6.846,3.5 5.5,4.846 5.5,6.5 C5.5,8.154 6.846,9.5 8.5,9.5 C10.154,9.5 11.5,8.154 11.5,6.5 C11.5,4.846 10.154,3.5 8.5,3.5 Z M17.5,5.5 C16.397,5.5 15.5,6.397 15.5,7.5 C15.5,8.603 16.397,9.5 17.5,9.5 C18.603,9.5 19.5,8.603 19.5,7.5 C19.5,6.397 18.603,5.5 17.5,5.5 Z" ></path>
		</svg>
	 );
}

const RemovePersonIco = ({color}) => {
	return (
		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill={color || 'white'} d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M12.0222607,13.9993086 C11.7255613,14.4626083 11.4860296,14.9660345 11.3136172,15.4996352 L4.25354153,15.499921 C3.83932796,15.499921 3.50354153,15.8357075 3.50354153,16.249921 L3.50354153,17.1572408 C3.50354153,17.8128951 3.78953221,18.4359296 4.28670709,18.8633654 C5.5447918,19.9450082 7.44080155,20.5010712 10,20.5010712 C10.598839,20.5010712 11.1614445,20.4706245 11.6881394,20.4101192 C11.9370538,20.9102887 12.2508544,21.3740111 12.6170965,21.7904935 C11.8149076,21.9312924 10.9419626,22.0010712 10,22.0010712 C7.11050247,22.0010712 4.87168436,21.3444691 3.30881727,20.0007885 C2.48019625,19.2883988 2.00354153,18.2500002 2.00354153,17.1572408 L2.00354153,16.249921 C2.00354153,15.0072804 3.01090084,13.999921 4.25354153,13.999921 L12.0222607,13.9993086 Z M15.0930472,14.9662824 L15.0237993,15.0241379 L14.9659438,15.0933858 C14.8478223,15.2638954 14.8478223,15.4914871 14.9659438,15.6619968 L15.0237993,15.7312446 L16.7933527,17.5006913 L15.0263884,19.2674911 L14.968533,19.3367389 C14.8504114,19.5072486 14.8504114,19.7348403 14.968533,19.9053499 L15.0263884,19.9745978 L15.0956363,20.0324533 C15.2661459,20.1505748 15.4937377,20.1505748 15.6642473,20.0324533 L15.7334952,19.9745978 L17.5003527,18.2076913 L19.2693951,19.9768405 L19.338643,20.0346959 C19.5091526,20.1528175 19.7367444,20.1528175 19.907254,20.0346959 L19.9765019,19.9768405 L20.0343574,19.9075926 C20.1524789,19.737083 20.1524789,19.5094912 20.0343574,19.3389816 L19.9765019,19.2697337 L18.2073527,17.5006913 L19.9792686,15.7312918 L20.0371241,15.6620439 C20.1552456,15.4915343 20.1552456,15.2639425 20.0371241,15.0934329 L19.9792686,15.024185 L19.9100208,14.9663296 C19.7395111,14.848208 19.5119194,14.848208 19.3414098,14.9663296 L19.2721619,15.024185 L17.5003527,16.7936913 L15.7309061,15.0241379 L15.6616582,14.9662824 C15.5155071,14.8650354 15.3274181,14.8505715 15.1692847,14.9228908 L15.0930472,14.9662824 L15.0930472,14.9662824 Z M10,2.0046246 C12.7614237,2.0046246 15,4.24320085 15,7.0046246 C15,9.76604835 12.7614237,12.0046246 10,12.0046246 C7.23857625,12.0046246 5,9.76604835 5,7.0046246 C5,4.24320085 7.23857625,2.0046246 10,2.0046246 Z M10,3.5046246 C8.06700338,3.5046246 6.5,5.07162798 6.5,7.0046246 C6.5,8.93762123 8.06700338,10.5046246 10,10.5046246 C11.9329966,10.5046246 13.5,8.93762123 13.5,7.0046246 C13.5,5.07162798 11.9329966,3.5046246 10,3.5046246 Z" id="🎨-Color"></path>
		</svg>
	 );
}

const PaletteIco = ({color}) => {
	return (
		<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path fill={color || 'white'} d="M3.83904058,5.85749561 C6.78004581,1.94188971 12.8686707,0.802505202 17.2029394,3.497377 C21.4827525,6.15839057 23.0567972,11.2744655 21.303866,16.0747407 C19.648689,20.6073231 15.2875295,22.403209 12.1442101,20.1231428 C10.9667425,19.2690444 10.5102901,18.1984035 10.2896576,16.4593132 L10.1842745,15.4713913 L10.1388589,15.073954 C10.0162342,14.1399065 9.82780748,13.7214296 9.43453605,13.5022264 C8.89894535,13.2036966 8.54231757,13.1967226 7.83905282,13.4692784 L7.48794193,13.6148779 L7.30920754,13.6928218 C6.29543196,14.1331038 5.62104161,14.2877923 4.76804588,14.1090543 L4.56779442,14.0618665 L4.40426138,14.0152691 C1.61529547,13.1510586 1.20220653,9.36813303 3.83904058,5.85749561 Z M4.8232597,12.5739125 L4.94616428,12.610372 L5.080113,12.6412161 C5.51918878,12.7281665 5.89444039,12.6556749 6.51713486,12.3993955 L7.11930681,12.1421347 C8.32144994,11.6492191 9.1045463,11.6010233 10.1648305,12.1920088 C11.0824191,12.7034581 11.4400583,13.4895978 11.62247,14.8516511 L11.6756637,15.310802 L11.729873,15.8425189 L11.7770095,16.2649431 C11.9490842,17.6262078 12.2619162,18.3554553 13.024955,18.90894 C15.3002886,20.5593963 18.5593937,19.2173263 19.8948725,15.5602143 C21.411142,11.4080201 20.0689941,7.04567303 16.4109117,4.77122636 C12.736718,2.48676231 7.51248742,3.46438986 5.03840796,6.75833849 C2.96361994,9.52067707 3.21809532,12.0378944 4.8232597,12.5739125 Z M16.0477462,10.5795744 C15.8690689,9.91274179 16.264797,9.2273206 16.9316297,9.04864333 C17.5984623,8.86996607 18.2838835,9.26569418 18.4625608,9.93252681 C18.641238,10.5993594 18.2455099,11.2847806 17.5786773,11.4634579 C16.9118447,11.6421352 16.2264235,11.2464071 16.0477462,10.5795744 Z M16.5423361,14.0682389 C16.3636589,13.4014063 16.759387,12.7159851 17.4262196,12.5373078 C18.0930522,12.3586306 18.7784734,12.7543587 18.9571507,13.4211913 C19.135828,14.0880239 18.7400999,14.7734451 18.0732672,14.9521224 C17.4064346,15.1307997 16.7210134,14.7350716 16.5423361,14.0682389 Z M14.0692386,7.57689062 C13.8905613,6.91005799 14.2862894,6.2246368 14.9531221,6.04595953 C15.6199547,5.86728227 16.3053759,6.26301038 16.4840531,6.92984301 C16.6627304,7.59667564 16.2670023,8.28209683 15.6001697,8.4607741 C14.933337,8.63945136 14.2479158,8.24372325 14.0692386,7.57689062 Z M14.0407569,16.5752747 C13.8620796,15.9084421 14.2578077,15.2230209 14.9246403,15.0443437 C15.591473,14.8656664 16.2768942,15.2613945 16.4555714,15.9282271 C16.6342487,16.5950598 16.2385206,17.280481 15.571688,17.4591582 C14.9048553,17.6378355 14.2194341,17.2421074 14.0407569,16.5752747 Z M10.5438339,6.60529725 C10.3651566,5.93846462 10.7608847,5.25304343 11.4277174,5.07436616 C12.09455,4.8956889 12.7799712,5.29141701 12.9586484,5.95824964 C13.1373257,6.62508227 12.7415976,7.31050346 12.074765,7.48918073 C11.4079323,7.66785799 10.7225111,7.27212988 10.5438339,6.60529725 Z" id="🎨-Color"></path>
		</svg>
	 );
}

export {
	AddProjectIco,
	AddTaskIco,
	DeleteIco,
	EditIco,
	GripIco,
	Tag,
	CheckIco,
	AddPeopleIco,
	RemovePersonIco,
	PaletteIco,
};