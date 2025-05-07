
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
  analogOutCH1: {
    name: 'Analog Out CH1',
    description: 'Configure Analog Output Channel 1',
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
    displayKey: 'output',
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
    displayKey: 'mode',
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
    displayKey: 'mode',
    nested: {
      mode: {
        name: 'Alarm Mode',
        description: 'Select alarm mode',
        options: ['Off', 'Power', '% Match'],
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
    displayKey: 'lockMode',
    nested: {
      lockMode: {
        name: 'Lock Mode',
        description: 'Turn on or off the lock screen functionality',
        options: ['Off', 'On'],
        current: 'Off'
      },
      createCode: {
        name: 'Create Lock Code',
        description: 'Set or change the lock code',
        type: 'text',
        current: '39889'
      },
      systemConfig: {
        name: 'System Config',
        description: 'Access to system configuration',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      workheadConfig: {
        name: 'Workhead Config',
        description: 'Access to workhead configuration',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      setpointAdjust: {
        name: 'Setpoint Adjust',
        description: 'Access to setpoint adjustment',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      timeAdjust: {
        name: 'Time Adjust',
        description: 'Access to time adjustment',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      clearFaults: {
        name: 'Clear Last Faults',
        description: 'Access to clear last faults',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      editFiles: {
        name: 'Edit Files',
        description: 'Access to edit files',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      hostClient: {
        name: 'Host Client',
        description: 'Access to host/client functions',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      },
      throughHeating: {
        name: 'Through Heating',
        description: 'Access to through heating',
        options: ['Allow', 'Lock'],
        current: 'Allow'
      }
    },
    displayKey: 'lockMode' // Optional: change if you'd prefer to show another key
  },
  advancedSettings: {
    name: 'Advanced Settings',
    description: 'Configure advanced features',
    nested: {
      precharge: { name: 'Precharge', type: 'range', min: 10, max: 100, step: 10, current: 50 },
      testDigitalIO: { name: 'Test Digital I/O', description: '', current: '' },
      sdCardUtilities: { name: 'SD Card Utilities', description: '', current: '' },
      tunerSpeed: { name: 'Tuner Speed', type: 'range', min: 1, max: 9, step: 1, current: 5 },
      rampSpeed: { name: 'Ramp Speed', type: 'range', min: 1, max: 9, step: 1, current: 5 },
      analogInput2: { name: 'Analog Input 2', options: ['0-10V', '4-20mA'], current: '0-10V' },
      renewTunerSpeed0: { name: 'Renew tuner speed 0', description: '', current: '' },
      autoresetFlowFaults: { name: 'Autoreset Flow Faults', options: ['Off', 'On'], current: 'Off' },
      igbtMaxTemp: { name: 'IGBT Max Temp', type: 'text', current: 130 },
      vmaxRatioAdjust: { name: 'Vmax ratio adjust', description: '', current: '' },
      initializeAdam: { name: 'Initialize Adam', description: '', current: '' },
      arcFilter: { name: 'Arc Filter', options: ['Off', 'On'], current: 'Off' },
      coilGroundMode: { name: 'Coil Ground Mode', options: ['0', '1'], current: '0' },
      capVoltsFault: { name: 'Cap Volts Fault', options: ['Off', 'On'], current: 'Off' }
    }

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
    // Skip displaying value for 'Advanced Settings'
    if (key === 'advancedSettings') {
      value.innerText = '';
      button.appendChild(label);
      button.appendChild(value);
      mainGrid.appendChild(button);
      continue; // Skip the rest of the loop for this key
    }


    if (param.nested) {
      let nestedKey = param.displayKey || Object.keys(param.nested)[0];
      if (nestedKey && param.nested[nestedKey]) {
        value.innerText = param.nested[nestedKey].current;
      } else {
        value.innerText = '';
      }
    } else if (key === 'startFrequency') {
      value.innerText = `${param.current} kHz`;
    } else if (key === 'tuneVoltage') {
      value.innerText = `${param.current}%`;
    } else if (key === 'matchResolution') {
      value.innerText = param.current; // already includes %
    } else if (key === 'advancedSettings') {
      value.innerText = ' ';
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

        // Update nested button value (submenu)
        const valueElement = document.getElementById(`value-${parentKey}-${nestedKey}`);
        if (valueElement) valueElement.innerText = option;

        // If this nested item is the displayKey, update top-level display too
        if (param.displayKey === nestedKey) {
          const topLevelValueElement = document.getElementById(`value-${parentKey}`);
          if (topLevelValueElement) {
            topLevelValueElement.innerText = option;
          }
        }

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
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '←', 'C'].forEach(val => {
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

      // Update top-level display if necessary
      if (param.displayKey === nestedKey) {
        const topLevelValueElement = document.getElementById(`value-${parentKey}`);
        if (topLevelValueElement) {
          topLevelValueElement.innerText = input.value;
        }
      }

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

      // Update top-level display if necessary
      if (param.displayKey === nestedKey) {
        const topLevelValueElement = document.getElementById(`value-${parentKey}`);
        if (topLevelValueElement) {
          topLevelValueElement.innerText = input.value;
        }
      }

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

      // Determine unit for display
      let unit = '';
      if (paramKey === 'alarm' && nestedKey === 'delay') {
        unit = 's';
      } else if (paramKey === 'advancedSettings' && nestedKey === 'precharge') {
        unit = '%';
      } else if (paramKey === 'advancedSettings' && nestedKey === 'igbtMaxTemp') {
        const tempUnit = parameters.temperature?.current === 'Fahrenheit' ? '°F' : '°C';
        unit = tempUnit;
      } else if (paramKey === 'alarm' && ['low', 'high'].includes(nestedKey)) {
        const alarmMode = parameters['alarm']?.nested?.mode?.current;
        unit = alarmMode === 'Power' ? 'kW' : '%';
      }

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
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '←', 'C'].forEach(val => {
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
