$(function(){
	/*list of functions*/
	const helloC3PO = () => 
		$('#c3po img').animate({
			right: 0
		}, 700);
	const helloC3PO_final = () => {
		$('#left-choice-zone').css({
			'z-index': '-1'
		});
		$('#right-choice-zone').css({
			'z-index': '-1'
		});
		$('#c3po img').css({
			top: '250px'
		});
		$('#c3po img').animate({
			right: 0
		}, 700);
	}
	const byeC3PO = () => {
		$('#c3po img').animate({
			right: '420px'
		}, 700);
	}
	const helloLuke = () => {
		$('#x-wing img').animate({
			bottom: 0
		}, 700);
	}
	const helloWASD = () => {
		$('#wasd img').fadeIn(400);
		$('#wasd img').fadeOut(400);
		$('#wasd img').fadeIn(400);
		$('#wasd img').fadeOut(400);
		$('#wasd img').fadeIn(400);
	}
	const byeAll = () => {
		$('#x-wing img').fadeOut(1000);
		$('#wasd img').fadeOut(1000);
	}
	const firstWindow = () => {

		$('#dialog-window-1').removeClass('dialog-windows-hidden');
	}
	const secondWindow = () => {
		$('#dialog-window-1').addClass('dialog-windows-hidden');
		$('#dialog-window-2').removeClass('dialog-windows-hidden');
	}
	const thirdWindow = () => {
		$('#dialog-window-2').addClass('dialog-windows-hidden');
		$('#dialog-window-3').removeClass('dialog-windows-hidden');
	}
	const fourthWindow = () => {
		$('#dialog-window-3').addClass('dialog-windows-hidden');
		$('#dialog-window-4').removeClass('dialog-windows-hidden');
	}
	const finalWindow = () => {
		$('#final-dialog-window').show();
	}
	const helloIstSet = () => {
		$('#Ist_set img').show();
		$('#Ist_set img').css({
			'position': 'fixed'
		});
		$('#Ist_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloIIndSet = () => {
		$('#IInd_set img').show();
		$('#IInd_set img').css({
			'position': 'fixed'
		});
		$('#IInd_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloIIIrdSet = () => {
		$('#IIIrd_set img').show();
		$('#IIIrd_set img').css({
			'position': 'fixed'
		});
		$('#IIIrd_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloIVthSet = () => {
		$('#IVth_set img').show();
		$('#IVth_set img').css({
			'position': 'fixed'
		});
		$('#IVth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloVthSet = () => {
		$('#Vth_set img').show();
		$('#Vth_set img').css({
			'position': 'fixed'
		});
		$('#Vth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloVIthSet = () => {
		$('#VIth_set img').show();
		$('#VIth_set img').css({
			'position': 'fixed'
		});
		$('#VIth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloVIIthSet = () => {
		$('#VIIth_set img').show();
		$('#VIIth_set img').css({
			'position': 'fixed'
		});
		$('#VIIth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const leftCoice = () => {
		$('#left-shot-1 img, #left-shot-2 img').fadeIn(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeOut(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeIn(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeOut(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeIn(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeOut(300);
	}
	const rightCoice = () => {
		$('#right-shot-1 img, #right-shot-2 img').fadeIn(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeOut(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeIn(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeOut(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeIn(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeOut(300);
	}
	const lucasfilmCoice = () => {
		$('#answer_1_1').fadeOut(300);
		$('#answer_1_1').fadeIn(300);
		$('#answer_1_1').fadeOut(300);
		$('#answer_1_1').fadeIn(300);
		$('#answer_1_1').fadeOut(300);
		$('#answer_1_1').fadeIn(300);
	}
	const disnayCoice = () => {
		$('#answer_1_2').fadeOut(300);
		$('#answer_1_2').fadeIn(300);
		$('#answer_1_2').fadeOut(300);
		$('#answer_1_2').fadeIn(300);
		$('#answer_1_2').fadeOut(300);
		$('#answer_1_2').fadeIn(300);
	}
	const movieCoice = () => {
		$('#answer_2_1').fadeOut(300);
		$('#answer_2_1').fadeIn(300);
		$('#answer_2_1').fadeOut(300);
		$('#answer_2_1').fadeIn(300);
		$('#answer_2_1').fadeOut(300);
		$('#answer_2_1').fadeIn(300);
	}
	const animationCoice = () => {
		$('#answer_2_2').fadeOut(300);
		$('#answer_2_2').fadeIn(300);
		$('#answer_2_2').fadeOut(300);
		$('#answer_2_2').fadeIn(300);
		$('#answer_2_2').fadeOut(300);
		$('#answer_2_2').fadeIn(300);
	}
	const fullCoice = () => {
		$('#answer_3_1').fadeOut(300);
		$('#answer_3_1').fadeIn(300);
		$('#answer_3_1').fadeOut(300);
		$('#answer_3_1').fadeIn(300);
		$('#answer_3_1').fadeOut(300);
		$('#answer_3_1').fadeIn(300);
	}
	const series1Coice = () => {
		$('#answer_3_2').fadeOut(300);
		$('#answer_3_2').fadeIn(300);
		$('#answer_3_2').fadeOut(300);
		$('#answer_3_2').fadeIn(300);
		$('#answer_3_2').fadeOut(300);
		$('#answer_3_2').fadeIn(300);
	}
	const repCoice = () => {
		$('#answer_4_1').fadeOut(300);
		$('#answer_4_1').fadeIn(300);
		$('#answer_4_1').fadeOut(300);
		$('#answer_4_1').fadeIn(300);
		$('#answer_4_1').fadeOut(300);
		$('#answer_4_1').fadeIn(300);
	}
	const empCoice = () => {
		$('#answer_4_2').fadeOut(300);
		$('#answer_4_2').fadeIn(300);
		$('#answer_4_2').fadeOut(300);
		$('#answer_4_2').fadeIn(300);
		$('#answer_4_2').fadeOut(300);
		$('#answer_4_2').fadeIn(300);
	}
	const _1980Coice = () => {
		$('#answer_5_1').fadeOut(300);
		$('#answer_5_1').fadeIn(300);
		$('#answer_5_1').fadeOut(300);
		$('#answer_5_1').fadeIn(300);
		$('#answer_5_1').fadeOut(300);
		$('#answer_5_1').fadeIn(300);
	}
	const _2000Coice = () => {
		$('#answer_5_2').fadeOut(300);
		$('#answer_5_2').fadeIn(300);
		$('#answer_5_2').fadeOut(300);
		$('#answer_5_2').fadeIn(300);
		$('#answer_5_2').fadeOut(300);
		$('#answer_5_2').fadeIn(300);
	}
	const skywalkerCoice = () => {
		$('#answer_6_1').fadeOut(300);
		$('#answer_6_1').fadeIn(300);
		$('#answer_6_1').fadeOut(300);
		$('#answer_6_1').fadeIn(300);
		$('#answer_6_1').fadeOut(300);
		$('#answer_6_1').fadeIn(300);
	}
	const storyCoice = () => {
		$('#answer_6_2').fadeOut(300);
		$('#answer_6_2').fadeIn(300);
		$('#answer_6_2').fadeOut(300);
		$('#answer_6_2').fadeIn(300);
		$('#answer_6_2').fadeOut(300);
		$('#answer_6_2').fadeIn(300);
	}
	const animated_seriesCoice = () => {
		$('#answer_7_1').fadeOut(300);
		$('#answer_7_1').fadeIn(300);
		$('#answer_7_1').fadeOut(300);
		$('#answer_7_1').fadeIn(300);
		$('#answer_7_1').fadeOut(300);
		$('#answer_7_1').fadeIn(300);
	}
	const series2Coice = () => {
		$('#answer_7_2').fadeOut(300);
		$('#answer_7_2').fadeIn(300);
		$('#answer_7_2').fadeOut(300);
		$('#answer_7_2').fadeIn(300);
		$('#answer_7_2').fadeOut(300);
		$('#answer_7_2').fadeIn(300);
	}
	const byeIstSet = () => {
		$('#Ist_set img').fadeOut(1000);
	}
	const byeIIndSet = () => {
		$('#IInd_set img').fadeOut(1000);
	}
	const byeIIIrdSet = () => {
		$('#IIIrd_set img').fadeOut(1000);
	}
	const byeIVthSet = () => {
		$('#IVth_set img').fadeOut(1000);
	}
	const byeVthSet = () => {
		$('#Vth_set img').fadeOut(1000);
	}
	const byeVIthSet = () => {
		$('#VIth_set img').fadeOut(1000);
	}
	const byeVIIthSet = () => {
		$('#VIIth_set img').fadeOut(1000);
	}
	const changeOnclick1 = () => {
		$('#check_what_the_options').css({
			'font-size': '2px'
		})
	}
	const changeOnclick2 = () => {
		$('#check_what_the_options').css({
			'font-size': '3px'
		})
	}
	const changeOnclick3 = () => {
		$('#check_what_the_options').css({
			'font-size': '4px'
		})
	}
	const changeOnclick4 = () => {
		$('#check_what_the_options').css({
			'font-size': '5px'
		})
	}
	const changeOnclick5 = () => {
		$('#check_what_the_options').css({
			'font-size': '6px'
		})
	}
	const changeOnclick6 = () => {
		$('#check_what_the_options').css({
			'font-size': '7px'
		})
	}
	const changeOnclick3000 = () => {
		$('#check_what_the_options').css({
			'font-size': '20px'
		})
	}
	const helloFinalEp3 = () => {
		$('#result--epIII img').fadeIn(1000);
	}
	const helloFinalEp5 = () => {
		$('#result--epV img').fadeIn(1000);
	}
	const helloFinalDroids = () => {
		$('#result--droids img').fadeIn(1000);
	}
	const helloFinalCloneWars = () => {
		$('#result--clone_wars img').fadeIn(1000);
	}
	const helloFinalEp7 = () => {
		$('#result--epVII img').fadeIn(1000);
	}
	const helloFinalRogue1 = () => {
		$('#result--rogue1 img').fadeIn(1000);
	}
	const helloFinalRebels = () => {
		$('#result--rebels img').fadeIn(1000);
	}
	const helloFinalAndor = () => {
		$('#result--andor img').fadeIn(1000);
	}

	/*pre-game animation*/
	/*change ship function
	$('#x-wing img').attr('src','img/tie.png');*/
	setTimeout(helloC3PO, 1000);
	setTimeout(firstWindow, 2000);
	$('.dialog-windows').on('click', function(){
		secondWindow();
		$('.dialog-windows').on('click', function(){
			thirdWindow();
			$('.dialog-windows').on('click', function(){
				fourthWindow();
				$('.dialog-windows').on('click', function() {
					$('#dialog-window-4').addClass('dialog-windows-hidden');
					byeC3PO();
	/*game functions*/
					setTimeout(helloLuke, 500);
					setTimeout(helloIstSet, 500);
					setTimeout(helloWASD, 500);
					$('.choice-zone').css({
						'display': 'block'
					});
					$('#left-choice-zone').on('mouseover', function(){
						$('#x-wing img').animate({
							'padding-left': '10%'
						}, 700);
					});
					$('#right-choice-zone').on('mouseover', function(){
						$('#x-wing img').animate({
							'padding-left': '75%'
						}, 700);
					});
					$('html').on('keydown', function(event){
						if(event.which == 65) {
							$('#x-wing img').animate({
							'padding-left': '10%'
							}, 700);
							$('#check_what_the_options2').css({
								'font-size': '1px'
							});
						}
					});
					$('html').on('keydown', function(event){
						if(event.which == 68) {
							$('#x-wing img').animate({
							'padding-left': '75%'
							}, 700);
							$('#check_what_the_options2').css({
								'font-size': '2px'
							});
						}
					});
					$('html').on('keydown', function(event){
						if(event.which == 83) {
							$('#x-wing img').animate({
							'padding-top': '15%'
						}, 500);
						}
					});
					$('html').on('keydown', function(event){
						if(event.which == 87) {
							$('#x-wing img').animate({
							'padding-top': '5%'
						}, 500);
						}
					});
					$("html").keydown(function(event) {
    				    if ((event.which == 13) && ($('#check_what_the_options2').css('font-size') == '1px')) {
    				    		$("#left-choice-zone").click();
      					} 
   					 });
					$("html").keydown(function(event) {
    				    if ((event.which == 13) && ($('#check_what_the_options2').css('font-size') == '2px')) {
    				    		$("#right-choice-zone").click();
      					} 
   					 });
					$('#left-choice-zone').on('click', function(){
						if ($('#check_what_the_options').css('font-size') == '1px') {
							$('#x-wing img').animate({
							'padding-top': '5%',
							'padding-left': '10%'
							}, 700);
							setTimeout(leftCoice, 700);
							setTimeout(lucasfilmCoice, 2500);
							setTimeout(byeIstSet, 4300);
							setTimeout(helloIIndSet, 5400);
							setTimeout(changeOnclick1, 5400);
						} else {
							if ($('#check_what_the_options').css('font-size') == '2px') {
								$('#x-wing img').animate({
								'padding-top': '5%',
								'padding-left': '10%'
								}, 700);
								setTimeout(leftCoice, 700);
								setTimeout(movieCoice, 2500);
								setTimeout(byeIIndSet, 4300);
								setTimeout(helloIVthSet, 5400);
								setTimeout(changeOnclick2, 5400);
							} else {
								if ($('#check_what_the_options').css('font-size') == '3px') {
									$('#x-wing img').animate({
									'padding-top': '5%',
									'padding-left': '10%'
									}, 700);
									setTimeout(leftCoice, 700);
									setTimeout(repCoice, 2500);
									setTimeout(byeIVthSet, 4300);
									setTimeout(byeAll, 4300);
									setTimeout(changeOnclick3000, 4300);
									setTimeout(helloC3PO_final, 5300);
									setTimeout(finalWindow, 6300);
									$('#final-dialog-window').on('click', function(){
										$('#final-dialog-window').css({
											'visibility': 'hidden'
										});
										byeC3PO();
										setTimeout(helloFinalEp3, 600);
									});
									//анимация, предлагающая посмотреть Эпизод III: Месть ситхов
								} else {
									if ($('#check_what_the_options').css('font-size') == '5px') {
										$('#x-wing img').animate({
										'padding-top': '5%',
										'padding-left': '10%'
										}, 700);
										setTimeout(leftCoice, 700);
										setTimeout(animated_seriesCoice, 2500);
										setTimeout(byeVIIthSet, 4300);
										setTimeout(byeAll, 4300);
										setTimeout(changeOnclick3000, 4300);
										setTimeout(helloC3PO_final, 5300);
										setTimeout(finalWindow, 6300);
										$('#final-dialog-window').on('click', function(){
											$('#final-dialog-window').css({
												'visibility': 'hidden'
											});
											byeC3PO();
											setTimeout(helloFinalRebels, 600);
										});
										//анимация, предлагающая посмотреть Повстанцев
									} else {
										if ($('#check_what_the_options').css('font-size') == '6px') {
											$('#x-wing img').animate({
											'padding-top': '5%',
											'padding-left': '10%'
											}, 700);
											setTimeout(leftCoice, 700);
											setTimeout(_1980Coice, 2500);
											setTimeout(byeVthSet, 4300);
											setTimeout(byeAll, 4300);
											setTimeout(changeOnclick3000, 4300);
											setTimeout(helloC3PO_final, 5300);
											setTimeout(finalWindow, 6300);
											$('#final-dialog-window').on('click', function(){
												$('#final-dialog-window').css({
													'visibility': 'hidden'
												});
												byeC3PO();
												setTimeout(helloFinalDroids, 600);
											});
											//анимация, предлагающая посмотреть Дроиды (1985—1986)
										} else {
											if ($('#check_what_the_options').css('font-size') == '4px') {
												$('#x-wing img').animate({
												'padding-top': '5%',
												'padding-left': '10%'
												}, 700);
												setTimeout(leftCoice, 700);
												setTimeout(fullCoice, 2500);
												setTimeout(byeIIIrdSet, 4300);
												setTimeout(helloVIthSet, 5400);
												setTimeout(changeOnclick6, 5400);
											} else {
												if ($('#check_what_the_options').css('font-size') == '7px') {
													$('#x-wing img').animate({
													'padding-top': '5%',
													'padding-left': '10%'
													}, 700);
													setTimeout(leftCoice, 700);
													setTimeout(skywalkerCoice, 2500);
													setTimeout(byeVIthSet, 4300);
													setTimeout(byeAll, 4300);
													setTimeout(changeOnclick3000, 4300);
													setTimeout(helloC3PO_final, 5300);
													setTimeout(finalWindow, 6300);
													$('#final-dialog-window').on('click', function(){
														$('#final-dialog-window').css({
															'visibility': 'hidden'
														});
														byeC3PO();
														setTimeout(helloFinalEp7, 600);
													});
													//анимация, предлагающая посмотреть Эпизод VII: Пробуждение силы
												}
											}
										}
									}
								}
							}
						}
					});
					$('#right-choice-zone').on('click', function(){
						if ($('#check_what_the_options').css('font-size') == '1px') {
							$('#x-wing img').animate({
							'padding-top': '5%',
							'padding-left': '75%'
							}, 700);
							setTimeout(rightCoice, 700);
							setTimeout(disnayCoice, 2500);
							setTimeout(byeIstSet, 4300);
							setTimeout(helloIIIrdSet, 5400);
							setTimeout(changeOnclick3, 5400);
						} else {
							if ($('#check_what_the_options').css('font-size') == '4px') {
								$('#x-wing img').animate({
								'padding-top': '5%',
								'padding-left': '75%'
								}, 700);
								setTimeout(rightCoice, 700);
								setTimeout(series1Coice, 2500);
								setTimeout(byeIIIrdSet, 4300);
								setTimeout(helloVIIthSet, 5400);
								setTimeout(changeOnclick4, 5400);
							} else {
								if ($('#check_what_the_options').css('font-size') == '5px') {
									$('#x-wing img').animate({
									'padding-top': '5%',
									'padding-left': '75%'
									}, 700);
									setTimeout(rightCoice, 700);
									setTimeout(series2Coice, 2500);
									setTimeout(byeVIIthSet, 4300);
									setTimeout(byeAll, 4300);
									setTimeout(changeOnclick3000, 4300);
									setTimeout(helloC3PO_final, 5300);
									setTimeout(finalWindow, 6300);
									$('#final-dialog-window').on('click', function(){
										$('#final-dialog-window').css({
											'visibility': 'hidden'
										});
										byeC3PO();
										setTimeout(helloFinalAndor, 600);
									});
									//анимация, предлагающая посмотреть Андор
								} else {
									if ($('#check_what_the_options').css('font-size') == '3px') {
										$('#x-wing img').animate({
										'padding-top': '5%',
										'padding-left': '75%'
										}, 700);
										setTimeout(rightCoice, 700);
										setTimeout(empCoice, 2500);
										setTimeout(byeIVthSet, 4300);
										setTimeout(byeAll, 4300);
										setTimeout(changeOnclick3000, 4300);
										setTimeout(helloC3PO_final, 5300);
										setTimeout(finalWindow, 6300);
										$('#final-dialog-window').on('click', function(){
											$('#final-dialog-window').css({
												'visibility': 'hidden'
											});
											byeC3PO();
											setTimeout(helloFinalEp5, 600);
										});
										//анимация, предлагающая посмотреть Эпизод V: Империя наносит ответный удар
									} else {
										if ($('#check_what_the_options').css('font-size') == '2px') {
											$('#x-wing img').animate({
											'padding-top': '5%',
											'padding-left': '75%'
											}, 700);
											setTimeout(rightCoice, 700);
											setTimeout(animationCoice, 2500);
											setTimeout(byeIIndSet, 4300);
											setTimeout(helloVthSet, 5400);
											setTimeout(changeOnclick5, 5400);
										} else {
											if ($('#check_what_the_options').css('font-size') == '6px') {
												$('#x-wing img').animate({
												'padding-top': '5%',
												'padding-left': '75%'
												}, 700);
												setTimeout(rightCoice, 700);
												setTimeout(_2000Coice, 2500);
												setTimeout(byeVthSet, 4300);
												setTimeout(byeAll, 4300);
												setTimeout(changeOnclick3000, 4300);
												setTimeout(helloC3PO_final, 5300);
												setTimeout(finalWindow, 6300);
												$('#final-dialog-window').on('click', function(){
													$('#final-dialog-window').css({
														'visibility': 'hidden'
													});
													byeC3PO();
													setTimeout(helloFinalCloneWars, 600);
												});
												//анимация, предлагающая посмотреть Войны клонов (2008—2020)
											} else {
												if ($('#check_what_the_options').css('font-size') == '7px') {
													$('#x-wing img').animate({
													'padding-top': '5%',
													'padding-left': '75%'
													}, 700);
													setTimeout(rightCoice, 700);
													setTimeout(storyCoice, 2500);
													setTimeout(byeVIthSet, 4300);
													setTimeout(byeAll, 4300);
													setTimeout(changeOnclick3000, 4300);
													setTimeout(helloC3PO_final, 5300);
													setTimeout(finalWindow, 6300);
													$('#final-dialog-window').on('click', function(){
														$('#final-dialog-window').css({
															'visibility': 'hidden'
														});
														byeC3PO();
														setTimeout(helloFinalRogue1, 600);
													});
													//анимация, предлагающая посмотреть Изгой-один
												}
											}
										}
									}
								}
							}
						}
						
					});
				});
			});
		});
	});
});