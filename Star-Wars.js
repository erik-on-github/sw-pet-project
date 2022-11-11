$(function(){
	/*list of functions*/
	const helloC3PO = function() {
		$('#c3po img').animate({
			right: 0
		}, 700);
	}
	const helloC3PO_final = function() {
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
	const byeC3PO = function() {
		$('#c3po img').animate({
			right: '420px'
		}, 700);
	}
	const helloLuke = function() {
		$('#x-wing img').animate({
			bottom: 0
		}, 700);
	}
	const helloWASD = function() {
		$('#wasd img').fadeIn(400);
		$('#wasd img').fadeOut(400);
		$('#wasd img').fadeIn(400);
		$('#wasd img').fadeOut(400);
		$('#wasd img').fadeIn(400);
	}
	const byeAll = function() {
		$('#x-wing img').fadeOut(1000);
		$('#wasd img').fadeOut(1000);
	}
	const firstWindow = function() {

		$('#dialog-window-1').removeClass('dialog-windows-hidden');
	}
	const secondWindow = function() {
		$('#dialog-window-1').addClass('dialog-windows-hidden');
		$('#dialog-window-2').removeClass('dialog-windows-hidden');
	}
	const thirdWindow = function() {
		$('#dialog-window-2').addClass('dialog-windows-hidden');
		$('#dialog-window-3').removeClass('dialog-windows-hidden');
	}
	const fourthWindow = function() {
		$('#dialog-window-3').addClass('dialog-windows-hidden');
		$('#dialog-window-4').removeClass('dialog-windows-hidden');
	}
	const finalWindow = function() {
		$('#final-dialog-window').show();
	}
	const helloIstSet = function() {
		$('#Ist_set img').show();
		$('#Ist_set img').css({
			'position': 'fixed'
		});
		$('#Ist_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloIIndSet = function() {
		$('#IInd_set img').show();
		$('#IInd_set img').css({
			'position': 'fixed'
		});
		$('#IInd_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloIIIrdSet = function() {
		$('#IIIrd_set img').show();
		$('#IIIrd_set img').css({
			'position': 'fixed'
		});
		$('#IIIrd_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloIVthSet = function() {
		$('#IVth_set img').show();
		$('#IVth_set img').css({
			'position': 'fixed'
		});
		$('#IVth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloVthSet = function() {
		$('#Vth_set img').show();
		$('#Vth_set img').css({
			'position': 'fixed'
		});
		$('#Vth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloVIthSet = function() {
		$('#VIth_set img').show();
		$('#VIth_set img').css({
			'position': 'fixed'
		});
		$('#VIth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const helloVIIthSet = function() {
		$('#VIIth_set img').show();
		$('#VIIth_set img').css({
			'position': 'fixed'
		});
		$('#VIIth_set img').animate({
			'bottom': '4vw'
		}, 1500);
	}
	const leftCoice = function() {
		$('#left-shot-1 img, #left-shot-2 img').fadeIn(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeOut(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeIn(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeOut(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeIn(300);
		$('#left-shot-1 img, #left-shot-2 img').fadeOut(300);
	}
	const rightCoice = function() {
		$('#right-shot-1 img, #right-shot-2 img').fadeIn(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeOut(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeIn(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeOut(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeIn(300);
		$('#right-shot-1 img, #right-shot-2 img').fadeOut(300);
	}
	const lucasfilmCoice = function() {
		$('#answer_1_1').fadeOut(300);
		$('#answer_1_1').fadeIn(300);
		$('#answer_1_1').fadeOut(300);
		$('#answer_1_1').fadeIn(300);
		$('#answer_1_1').fadeOut(300);
		$('#answer_1_1').fadeIn(300);
	}
	const disnayCoice = function() {
		$('#answer_1_2').fadeOut(300);
		$('#answer_1_2').fadeIn(300);
		$('#answer_1_2').fadeOut(300);
		$('#answer_1_2').fadeIn(300);
		$('#answer_1_2').fadeOut(300);
		$('#answer_1_2').fadeIn(300);
	}
	const movieCoice = function() {
		$('#answer_2_1').fadeOut(300);
		$('#answer_2_1').fadeIn(300);
		$('#answer_2_1').fadeOut(300);
		$('#answer_2_1').fadeIn(300);
		$('#answer_2_1').fadeOut(300);
		$('#answer_2_1').fadeIn(300);
	}
	const animationCoice = function() {
		$('#answer_2_2').fadeOut(300);
		$('#answer_2_2').fadeIn(300);
		$('#answer_2_2').fadeOut(300);
		$('#answer_2_2').fadeIn(300);
		$('#answer_2_2').fadeOut(300);
		$('#answer_2_2').fadeIn(300);
	}
	const fullCoice = function() {
		$('#answer_3_1').fadeOut(300);
		$('#answer_3_1').fadeIn(300);
		$('#answer_3_1').fadeOut(300);
		$('#answer_3_1').fadeIn(300);
		$('#answer_3_1').fadeOut(300);
		$('#answer_3_1').fadeIn(300);
	}
	const series1Coice = function() {
		$('#answer_3_2').fadeOut(300);
		$('#answer_3_2').fadeIn(300);
		$('#answer_3_2').fadeOut(300);
		$('#answer_3_2').fadeIn(300);
		$('#answer_3_2').fadeOut(300);
		$('#answer_3_2').fadeIn(300);
	}
	const repCoice = function() {
		$('#answer_4_1').fadeOut(300);
		$('#answer_4_1').fadeIn(300);
		$('#answer_4_1').fadeOut(300);
		$('#answer_4_1').fadeIn(300);
		$('#answer_4_1').fadeOut(300);
		$('#answer_4_1').fadeIn(300);
	}
	const empCoice = function() {
		$('#answer_4_2').fadeOut(300);
		$('#answer_4_2').fadeIn(300);
		$('#answer_4_2').fadeOut(300);
		$('#answer_4_2').fadeIn(300);
		$('#answer_4_2').fadeOut(300);
		$('#answer_4_2').fadeIn(300);
	}
	const _1980Coice = function() {
		$('#answer_5_1').fadeOut(300);
		$('#answer_5_1').fadeIn(300);
		$('#answer_5_1').fadeOut(300);
		$('#answer_5_1').fadeIn(300);
		$('#answer_5_1').fadeOut(300);
		$('#answer_5_1').fadeIn(300);
	}
	const _2000Coice = function() {
		$('#answer_5_2').fadeOut(300);
		$('#answer_5_2').fadeIn(300);
		$('#answer_5_2').fadeOut(300);
		$('#answer_5_2').fadeIn(300);
		$('#answer_5_2').fadeOut(300);
		$('#answer_5_2').fadeIn(300);
	}
	const skywalkerCoice = function() {
		$('#answer_6_1').fadeOut(300);
		$('#answer_6_1').fadeIn(300);
		$('#answer_6_1').fadeOut(300);
		$('#answer_6_1').fadeIn(300);
		$('#answer_6_1').fadeOut(300);
		$('#answer_6_1').fadeIn(300);
	}
	const storyCoice = function() {
		$('#answer_6_2').fadeOut(300);
		$('#answer_6_2').fadeIn(300);
		$('#answer_6_2').fadeOut(300);
		$('#answer_6_2').fadeIn(300);
		$('#answer_6_2').fadeOut(300);
		$('#answer_6_2').fadeIn(300);
	}
	const animated_seriesCoice = function() {
		$('#answer_7_1').fadeOut(300);
		$('#answer_7_1').fadeIn(300);
		$('#answer_7_1').fadeOut(300);
		$('#answer_7_1').fadeIn(300);
		$('#answer_7_1').fadeOut(300);
		$('#answer_7_1').fadeIn(300);
	}
	const series2Coice = function() {
		$('#answer_7_2').fadeOut(300);
		$('#answer_7_2').fadeIn(300);
		$('#answer_7_2').fadeOut(300);
		$('#answer_7_2').fadeIn(300);
		$('#answer_7_2').fadeOut(300);
		$('#answer_7_2').fadeIn(300);
	}
	const byeIstSet = function() {
		$('#Ist_set img').fadeOut(1000);
	}
	const byeIIndSet = function() {
		$('#IInd_set img').fadeOut(1000);
	}
	const byeIIIrdSet = function() {
		$('#IIIrd_set img').fadeOut(1000);
	}
	const byeIVthSet = function() {
		$('#IVth_set img').fadeOut(1000);
	}
	const byeVthSet = function() {
		$('#Vth_set img').fadeOut(1000);
	}
	const byeVIthSet = function() {
		$('#VIth_set img').fadeOut(1000);
	}
	const byeVIIthSet = function() {
		$('#VIIth_set img').fadeOut(1000);
	}
	const changeOnclick1 = function() {
		$('#check_what_the_options').css({
			'font-size': '2px'
		})
	}
	const changeOnclick2 = function() {
		$('#check_what_the_options').css({
			'font-size': '3px'
		})
	}
	const changeOnclick3 = function() {
		$('#check_what_the_options').css({
			'font-size': '4px'
		})
	}
	const changeOnclick4 = function() {
		$('#check_what_the_options').css({
			'font-size': '5px'
		})
	}
	const changeOnclick5 = function() {
		$('#check_what_the_options').css({
			'font-size': '6px'
		})
	}
	const changeOnclick6 = function() {
		$('#check_what_the_options').css({
			'font-size': '7px'
		})
	}
	const changeOnclick3000 = function() {
		$('#check_what_the_options').css({
			'font-size': '20px'
		})
	}
	const helloFinalEp3 = function() {
		$('#result--epIII img').fadeIn(1000);
	}
	const helloFinalEp5 = function() {
		$('#result--epV img').fadeIn(1000);
	}
	const helloFinalDroids = function() {
		$('#result--droids img').fadeIn(1000);
	}
	const helloFinalCloneWars = function() {
		$('#result--clone_wars img').fadeIn(1000);
	}
	const helloFinalEp7 = function() {
		$('#result--epVII img').fadeIn(1000);
	}
	const helloFinalRogue1 = function() {
		$('#result--rogue1 img').fadeIn(1000);
	}
	const helloFinalRebels = function() {
		$('#result--rebels img').fadeIn(1000);
	}
	const helloFinalAndor = function() {
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