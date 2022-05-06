// Radio Buttons for change input options for (Client or Lawyer)

	const client = document.querySelector('.as-client');
	const lawyer = document.querySelector('.as-lawyer');
	const clientSide = document.querySelector('.client');
	const lawyerSide = document.querySelector('.lawyer');

	( _ => lawyerSide.style.display = 'none' )()

// Create a condition that targets viewports at least 768px wide

	const mediaQuery = window.matchMedia('(max-width: 56.25em)');

	const tabInitial = _ => {
		lawyerSide.style.display = 'none';
		clientSide.style.display = 'block';
	}

	const desktopInitial = _ => {
		lawyerSide.style.display = 'none';
		clientSide.style.display = 'flex';
	}

	// Media query function
	const tabletDetect = (e) => {
		// Check if the media query is TRUE
		if (e.matches) {
			tabInitial();

			client.addEventListener('click', _ => {
				tabInitial()
			});

			lawyer.addEventListener('click', _ => {
				lawyerSide.style.display = 'block';
				clientSide.style.display = 'none'
			})

		} else {
			desktopInitial();

			client.addEventListener('click', _ => {
				desktopInitial();
			});

			lawyer.addEventListener('click', _ => {
				lawyerSide.style.display = 'flex';
				clientSide.style.display = 'none'
			})
		}
	}

	// Register event listener
mediaQuery.addListener(tabletDetect)

// Initial check
tabletDetect(mediaQuery)
