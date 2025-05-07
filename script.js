
    const parameters = {
      startFrom: {
        name: 'Start From',
        description: 'Choose how to start the system',
        options: ['Local', 'Remote', 'RS-485'],
        current: 'Local'
      },
      startMode: {
        name: 'Start Mode',
        description: 'Select button mode to start',
        options: ['2 Button', '1 Button'],
        current: '2 Button'
      },
      controlFrom: {
        name: 'Control From',
        description: 'Select control input method',
        options: ['Local', 'Analog Input (0-10V)', 'Analog Input (4-20mA)', 'RS-485', 'Profile A', 'Profile B', 'Profile C', 'Profile D', 'Profile E', 'Profile F', 'Profile G', 'Profile H', 'Profile I', 'Profile J'],
        current: 'Local'
      },
      controlMode: {
        name: 'Control Mode',
        description: 'Choose control method',
        options: ['Voltage', 'Power'],
        current: 'Voltage'
      },
      resetFrom: {
        name: 'Reset From',
        description: 'Choose how to reset the system',
        options: ['Local', 'Remote', 'RS-485'],
        current: 'Local'
      },
      displayPercent: {
        name: 'Display%',
        description: 'Toggle power percentage visibility',
        options: ['Off', 'On'],
        current: 'On'
      },
      language: {
        name: 'Language',
        description: 'Select language',
        options: ['English', 'German', 'Spanish', 'French'],
        current: 'English'
      },
      temperature: {
        name: 'Temperature',
        description: 'Select temperature unit',
        options: ['Celsius', 'Fahrenheit'],
        current: 'Celsius'
      },
      startFrequency: {
        name: 'Start Frequency',
        description: 'Enter start frequency (kHz)',
        type: 'text',
        current: '25'
      },
      tuneVoltage: {
        name: 'Percent Tune Voltage',
        description: 'Adjust minimum tune volts (%)',
        type: 'range',
        min: 2,
        max: 10,
        step: 1,
        current: 5
      },
      autoReset: {
        name: 'Auto Reset',
        description: 'Enable or disable auto reset',
        options: ['Off', 'On'],
        current: 'Off'
      },
      analog_ch1: {
  name: 'Analog Out CH1',
  displayKey: 'output',
  nested: {
    output: {
      name: 'Output',
      options: ['Off', 'Voltage', 'Power', 'Frequency', '% Match'],
      current: 'Voltage',
      description: 'Choose the output type.'
    },
    mode: {
      name: 'Mode',
      options: ['0-10V', '4-20mA'],
      current: '0-10V',
      description: 'Set the output mode.'
    }
  }
}

,
      analogOutCH2: {
        name: 'Analog Out CH2',
        description: 'Configure Analog Output Channel 2',
        nested: {
          output: {
            name: 'Output',
            description: 'Select output type',
            options: ['Off', 'Voltage', 'Power', 'Frequency', '% Match'],
            current: 'Off'
          },
          mode: {
            name: 'Mode',
            description: 'Select signal mode',
            options: ['0-10V', '4-20mA'],
            current: '0-10V'
          }
        }
      },
      rs485: {
        name: 'RS-485',
        description: 'Configure RS-485 settings',
        nested: {
          mode: {
            name: 'Mode',
            description: 'Select RS-485 mode',
            options: ['Standard', 'MODBUS RTU', 'MODBUS TCP/IP'],
            current: 'Standard'
          },
          baudrate: {
            name: 'Baudrate',
            description: 'Select baudrate',
            options: ['9600', '19200', '38400', '57600', '115200'],
            current: '9600'
          },
          address: {
            name: 'Address',
            description: 'Set node address',
            type: 'range',
            min: 1,
            max: 32,
            step: 1,
            current: 1
          },
          multidrop: {
            name: 'Multi-Drop',
            description: 'Enable or disable multi-drop',
            options: ['Off', 'On'],
            current: 'Off'
          },
          mode: {
            name: 'Mode',
            description: 'Select RS-485 mode',
            options: ['STANDARD', 'MODBUS RTU', 'MODBUS TCP/IP'],
            current: 'STANDARD'
          },
          type: {
            name: 'Type',
            description: 'Select wiring type',
            options: ['4-Wire', '2-Wire'],
            current: '4-Wire'
          },
          terminate: {
            name: 'Terminate',
            description: 'Enable termination resistor',
            options: ['Off', 'On'],
            current: 'Off'
          }
        }
      },
      alarm: {
        name: 'Alarm',
        description: 'Alarm configuration',
        nested: {
          mode: {
            name: 'Alarm Mode',
            description: 'Select alarm mode',
            options: ['Power', '% Match'],
            current: 'Power'
          },
          low: {
            name: 'Alarm Low',
            description: 'Set low alarm threshold',
            type: 'text',
            current: '0.0'
          },
          high: {
            name: 'Alarm High',
            description: 'Set high alarm threshold',
            type: 'text',
            current: '10.0'
          },
          delay: {
            name: 'Alarm Delay',
            description: 'Set delay before alarm triggers (s)',
            type: 'text',
            current: '0'
          },
          alertOut: {
            name: 'Alert Digital Out',
            description: 'Enable digital alert output',
            options: ['No', 'Yes'],
            current: 'No'
          },
          heatOffFault: {
            name: 'Alert Heat Off Fault',
            description: 'Enable heat off fault alert',
            options: ['No', 'Yes'],
            current: 'No'
          },
          latch: {
            name: 'Latch Alarm',
            description: 'Enable alarm latching',
            options: ['No', 'Yes'],
            current: 'No'
          }
        }
      },
      matchResolution: {
        name: '% Match Resolution',
        description: 'Set match resolution',
        options: ['1%', '0.1%'],
        current: '1%'
      },
      lockPanel: {
        name: 'Lock Panel',
        description: 'Lock front panel interface',
        options: ['Off', 'On'],
        current: 'Off'
      }
    };

    const mainGrid = document.getElementById('main-grid');

    function createMainButtons() {
  mainGrid.innerHTML = ''; // Clear existing buttons

  for (const key in parameters) {
    const param = parameters[key];
    const button = document.createElement('div');
    button.className = 'option-button';
    button.onclick = () => openParameterMenu(key);

    const label = document.createElement('div');
    label.className = 'label';
    label.innerText = param.name;

    const value = document.createElement('div');
    value.className = 'value';
    value.id = `value-${key}`;

    // Show only one nested value (from displayKey or first nested key)
    if (param.nested) {
      let nestedKey = param.displayKey;

      // Fallback to first nested key if displayKey not defined
      if (!nestedKey) {
        const keys = Object.keys(param.nested);
        if (keys.length > 0) nestedKey = keys[0];
      }

      if (nestedKey && param.nested[nestedKey]) {
        value.innerText = param.nested[nestedKey].current;
      } else {
        value.innerText = ''; // No valid value found
      }

    } else if (param.type === 'text') {
      value.innerText = `${param.current} kHz`;
    } else if (param.type === 'range') {
      value.innerText = `${param.current}%`;
    } else {
      value.innerText = param.current;
    }

    button.appendChild(label);
    button.appendChild(value);
    mainGrid.appendChild(button);
  }
}




    function openNestedParameter(parentKey, nestedKey) {
  const param = parameters[parentKey];
  const nested = param.nested[nestedKey];
  document.getElementById('param-name').innerText = nested.name;
  document.getElementById('param-desc').innerText = nested.description;
  const optionsDiv = document.getElementById('param-options');
  optionsDiv.innerHTML = '';

  if (nested.options) {
    nested.options.forEach(option => {
      const btn = document.createElement('button');
      btn.innerText = option;
      if (option === nested.current) btn.classList.add('highlight-selected');
      btn.onclick = () => {
        nested.current = option;
        // Update the visible value on the nested button
        const displayValue = nested.current;
        const valueElement = document.getElementById(`value-${parentKey}-${nestedKey}`);
        if (valueElement) valueElement.innerText = displayValue;

        // Return to the parent menu
        openParameterMenu(parentKey);
      };
      optionsDiv.appendChild(btn);
    });

  } else if (nested.type === 'text') {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = nested.current;
    optionsDiv.appendChild(input);

    const numpad = document.createElement('div');
    numpad.className = 'numpad';
    ['1','2','3','4','5','6','7','8','9','.','0','←','C'].forEach(val => {
      const btn = document.createElement('button');
      btn.innerText = val;
      btn.onclick = () => {
        if (val === 'C') input.value = '';
        else if (val === '←') input.value = input.value.slice(0, -1);
        else if (val === '.' && input.value.includes('.')) return;
        else input.value += val;
      };
      numpad.appendChild(btn);
    });
    optionsDiv.appendChild(numpad);

    const enterBtn = document.createElement('button');
    enterBtn.className = 'enter-button';
    enterBtn.innerText = 'Enter';
    enterBtn.onclick = () => {
      nested.current = input.value;
      const valueElement = document.getElementById(`value-${parentKey}-${nestedKey}`);
      if (valueElement) valueElement.innerText = input.value;
      openParameterMenu(parentKey);
    };
    optionsDiv.appendChild(enterBtn);

  } else if (nested.type === 'range') {
    const input = document.createElement('input');
    input.type = 'range';
    input.min = nested.min;
    input.max = nested.max;
    input.step = nested.step;
    input.value = nested.current;
    const label = document.createElement('div');
    label.innerText = `${nested.current}`;
    input.oninput = () => {
      label.innerText = `${input.value}`;
    };
    optionsDiv.appendChild(label);
    optionsDiv.appendChild(input);

    const enterBtn = document.createElement('button');
    enterBtn.className = 'enter-button';
    enterBtn.innerText = 'Enter';
    enterBtn.onclick = () => {
      nested.current = input.value;
      const valueElement = document.getElementById(`value-${parentKey}-${nestedKey}`);
      if (valueElement) valueElement.innerText = input.value;
      openParameterMenu(parentKey);
    };
    optionsDiv.appendChild(enterBtn);
  }

  showScreen('parameterScreen');
}


    function openParameterMenu(paramKey) {
      const param = parameters[paramKey];
      document.getElementById('param-name').innerText = param.name;
      document.getElementById('param-desc').innerText = param.description;
      const optionsDiv = document.getElementById('param-options');
      optionsDiv.innerHTML = '';

      if (param.nested) {
        const submenu = document.createElement('div');
        submenu.className = 'options-grid';

        for (const nestedKey in param.nested) {
          const nested = param.nested[nestedKey];
          const nestedButton = document.createElement('div');
          nestedButton.className = 'option-button';
          nestedButton.onclick = () => openNestedParameter(paramKey, nestedKey);

          const label = document.createElement('div');
          label.className = 'label';
          label.innerText = nested.name;

          const value = document.createElement('div');
          value.className = 'value';
          value.id = `value-${paramKey}-${nestedKey}`;
          const alarmMode = parameters['alarm']?.nested?.mode?.current;
          const unit = ['low','high'].includes(nestedKey) && alarmMode ? (alarmMode === 'Power' ? 'kW' : '%') : '';
          value.innerText = nested.current + (unit ? ' ' + unit : '');

          nestedButton.appendChild(label);
          nestedButton.appendChild(value);
          submenu.appendChild(nestedButton);
        }

        optionsDiv.appendChild(submenu);

      } else if (param.options) {
        param.options.forEach(option => {
          const btn = document.createElement('button');
          btn.innerText = option;
          if (option === param.current) btn.classList.add('highlight-selected');
          btn.onclick = () => {
            param.current = option;
            document.getElementById(`value-${paramKey}`).innerText = option;
            showScreen('mainScreen');
          };
          optionsDiv.appendChild(btn);
        });
      } else if (param.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = param.current;
        optionsDiv.appendChild(input);

        const numpad = document.createElement('div');
        numpad.className = 'numpad';
        ['1','2','3','4','5','6','7','8','9','.','0','←','C'].forEach(val => {
          const btn = document.createElement('button');
          btn.innerText = val;
          btn.onclick = () => {
            if (val === 'C') input.value = '';
            else if (val === '←') input.value = input.value.slice(0, -1);
            else if (val === '.' && input.value.includes('.')) return;
            else input.value += val;
          };
          numpad.appendChild(btn);
        });
        optionsDiv.appendChild(numpad);

        const enterBtn = document.createElement('button');
        enterBtn.innerText = 'Enter';
        enterBtn.className = 'enter-button';
        enterBtn.onclick = () => {
          param.current = input.value;
          document.getElementById(`value-${paramKey}`).innerText = `${input.value} kHz`;
          showScreen('mainScreen');
        };
        optionsDiv.appendChild(enterBtn);
      } else if (param.type === 'range') {
        const input = document.createElement('input');
        input.type = 'range';
        input.min = param.min;
        input.max = param.max;
        input.step = param.step;
        input.value = param.current;
        const label = document.createElement('div');
        label.innerText = `${param.current}%`;
        input.oninput = () => {
          label.innerText = `${input.value}%`;
        };
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(input);

        const enterBtn = document.createElement('button');
        enterBtn.innerText = 'Enter';
        enterBtn.className = 'enter-button';
        enterBtn.onclick = () => {
          param.current = input.value;
          document.getElementById(`value-${paramKey}`).innerText = `${input.value}%`;
          showScreen('mainScreen');
        };
        optionsDiv.appendChild(enterBtn);
      }

      showScreen('parameterScreen');
    }

    function showScreen(id) {
      document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
      });
      document.getElementById(id).classList.add('active');
    }
    
    function updateMainButtonValue(paramKey) {
  const param = parameters[paramKey];
  const valueElement = document.getElementById(`value-${paramKey}`);

  if (!valueElement || !param.nested) return;

  let nestedKey = param.displayKey;

  if (!nestedKey) {
    const keys = Object.keys(param.nested);
    if (keys.length > 0) nestedKey = keys[0];
  }

  if (nestedKey && param.nested[nestedKey]) {
    valueElement.innerText = param.nested[nestedKey].current;
  }
}

    createMainButtons();
  