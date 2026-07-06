// Master Product Database Catalog for Control Technology Inc. (CTI)
const productsData = [
    // ==========================================
    // 1. PROCESSORS & PACs (2500 CLASSIC & COMPACT)
    // ==========================================
    {
        id: "2500P-J750",
        name: "2500P-J750 Janus PAC (3MB)",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v1.24",
        description: "Next-generation Programmable Automation Controller providing 3MB of project memory, native MQTT, and direct integration into existing 2500 Series and legacy Simatic 505 racks without disturbing field wiring.",
        specs: ["Project Memory: 3MB", "Protocols: MQTT, TCP/IP, Profibus", "Execution Speed: 10x legacy systems"]
    },
    {
        id: "2500P-J450",
        name: "2500P-J450 Janus PAC (2MB)",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v1.24",
        description: "Standard Janus Programmable Automation Controller featuring 2MB of project memory and integrated dual Ethernet ports for direct plant-floor and cloud connectivity.",
        specs: ["Project Memory: 2MB", "Protocols: MQTT, Ethernet/IP, Certified Modbus", "Dual Independent Ethernet Ports"]
    },
    {
        id: "2500C-J750",
        name: "2500C-J750 Compact Janus PAC",
        category: "Processor",
        line: "2500 Compact",
        status: "Active",
        firmware: "v1.24",
        description: "High-density, space-conscious Janus PAC designed specifically for the 2500C Compact chassis system, offering full IIoT functionality on a reduced physical footprint.",
        specs: ["Project Memory: 3MB", "Form Factor: Compact Line Slot-0", "Native MQTT Client Support"]
    },
    {
        id: "2500C-J450",
        name: "2500C-J450 Compact Janus PAC (2MB)",
        category: "Processor",
        line: "2500 Compact",
        status: "Active",
        firmware: "v1.24",
        description: "Standard memory version of the Compact Janus PAC platform optimized for distributed edge nodes and mid-sized industrial panel layouts.",
        specs: ["Project Memory: 2MB", "Form Factor: Compact Line", "Web-based Diagnostic Interface"]
    },
    {
        id: "2500-C400",
        name: "2500-C400 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v9.21",
        description: "Flagship classic plug-and-play CPU replacement featuring 3072K of total user memory. Fully in active production to maintain high-capacity historical plant networks.",
        specs: ["User Memory: 3072K", "Execution Speed: 0.1ms/K Boolean", "RBC Support: Master up to 7 remote bases"]
    },
    {
        id: "2500-C300",
        name: "2500-C300 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v9.21",
        description: "Mid-to-high capacity classic plug-and-play CPU replacement featuring 512K of user memory. Fully active production module for standard industrial execution loops.",
        specs: ["User Memory: 512K", "Execution Speed: 0.1ms/K", "Status: Active Production"]
    },
    {
        id: "2500-C200",
        name: "2500-C200 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v9.21",
        description: "Standard classic operational CPU replacement featuring 256K of user memory. Actively manufactured to preserve process continuity across historical system installations.",
        specs: ["User Memory: 256K", "Execution Speed: 0.1ms/K", "Status: Active Production"]
    },
    {
        id: "2500-C100",
        name: "2500-C100 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v9.21",
        description: "Entry-level classic CPU replacement featuring 128K of user memory. Fully active in production for small standalone utility and skid controls.",
        specs: ["User Memory: 128K", "Execution Speed: 0.1ms/K", "Status: Active Production"]
    },

    // ==========================================
    // 2. COPROCESSORS & REMOTE BASE CONTROLLERS (RBC)
    // ==========================================
    {
        id: "2500P-JACP",
        name: "2500P-JACP Janus Application Coprocessor",
        category: "Coprocessor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v1.06",
        description: "Advanced computational module providing standalone Linux-based execution power inside the main chassis for edge computing, custom calculations, and security routing.",
        specs: ["OS: Secure Linux Core", "Interface: Direct Backplane Pipeline", "Ports: Independent Gigabit Ethernet"]
    },
    {
        id: "2500P-ACP1",
        name: "2500P-ACP1 Application Coprocessor",
        category: "Coprocessor",
        line: "2500 Classic",
        status: "Mature",
        firmware: "v3.12",
        description: "Legacy calculation coprocessor for running specialized high-level language programs alongside standard logic loops.",
        specs: ["User Space: Dedicated Memory Bank", "Interface: Serial Debug Node"]
    },
    {
        id: "2500-RBC",
        name: "2500-RBC Remote Base Controller",
        category: "RBC",
        line: "2500 Classic",
        status: "Active",
        firmware: "v2.11",
        description: "Profibus-DP Remote Base Controller that slots seamlessly into any 2500 Series or Simatic 505 I/O base to link backplane modules to a master controller node.",
        specs: ["Protocol: Profibus-DP", "Baud Rates: Auto-detecting up to 12Mbps", "Isolation: Transformer Coupled"]
    },
    {
        id: "2500P-ECC1",
        name: "2500P-ECC1 Ethernet Control Coprocessor",
        category: "RBC",
        line: "2500 Classic",
        status: "Active",
        firmware: "v1.18",
        description: "High-speed Ethernet alternative to traditional fieldbus remote I/O control networks, executing distributed operations via standard fiber or copper links.",
        specs: ["Media: 10/100 Ethernet RJ45", "Configuration: Web Browser Utility", "Update Rate: Ultra-low latency backplane sync"]
    },

    // ==========================================
    // 3. COMMUNICATIONS & INTERFACES
    // ==========================================
    {
        id: "2573-MOD",
        name: "2573-MOD Modbus Network Adapter",
        category: "Communications",
        line: "2500 Classic",
        status: "Active",
        firmware: "v4.06",
        description: "Multi-port serial and Ethernet communication card allowing comprehensive master and slave connectivity across Modbus RTU and Modbus TCP/IP networks simultaneously.",
        specs: ["Physical Layer: RS-232, RS-422/485, RJ45 Ethernet", "Concurrent Connections: Multiple TCP Sockets", "Isolation: 1500V RMS Optical Barrier"]
    },
    {
        id: "2572-A",
        name: "2572-A Ethernet Communications Adapter",
        category: "Communications",
        line: "2500 Classic",
        status: "Active",
        firmware: "v2.32",
        description: "Standard industrial network card mapping system memory tables out directly to plant floor monitoring arrays or supervisory client software packages over TCP/IP.",
        specs: ["Speed: 10/100 Base-T", "Protocols: TCP/IP, UDP, Camp", "Diagnostics: Integrated Link LEDs"]
    },
    {
        id: "2572-B",
        name: "2572-B High-Performance Ethernet Adapter",
        category: "Communications",
        line: "2500 Classic",
        status: "Active",
        firmware: "v3.01",
        description: "Upgraded communication adapter featuring an accelerated processor board for handling dense telemetry throughput and heavy SCADA mapping client counts.",
        specs: ["Processor: High-speed engine upgrade", "Socket Depth: Extended data buffering", "Plug-and-Play Configuration"]
    },
    {
        id: "2500C-2572",
        name: "2500C-2572 Compact Ethernet Adapter",
        category: "Communications",
        line: "2500 Compact",
        status: "Active",
        firmware: "v2.05",
        description: "Network adapter tailored to the 2500C Compact form factor, bringing identical 2572 connectivity options to thin-profile enclosure installations.",
        specs: ["Form Factor: Compact Module", "Interface: Direct RJ45", "Bus Load: Low-draw design"]
    },

    // ==========================================
    // 4. ANALOG I/O MODULES
    // ==========================================
    {
        id: "2550-A",
        name: "2550-A Analog Input Module (8-Ch)",
        category: "Analog I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "Precision 8-channel analog input loop interface supporting typical instrumentation configurations with advanced digital noise dampening algorithms built-in.",
        specs: ["Channels: 8 Channel Inputs", "Signal Span: 0-5V, 0-10V, 4-20mA software selected", "Resolution: 16-bit Conversion"]
    },
    {
        id: "2556-A",
        name: "2556-A Analog Output Module (8-Ch)",
        category: "Analog I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "High-speed 8-channel output module for driving variable frequency drives, modulating valve actors, and proportional position hardware smoothly.",
        specs: ["Channels: 8 Grouped Outputs", "Ranges: 0-20mA, 4-20mA, +/-10V", "Response: Fast tracking updates"]
    },
    {
        id: "2557-A",
        name: "2557-A Isolated Analog Input (8-Ch)",
        category: "Analog I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "Independently isolated 8-channel analog card engineered to withstand high ground-loop potential variances across massive industrial facilities.",
        specs: ["Isolation: Channel-to-channel and channel-to-bus galvanic isolation", "Input Types: Voltage and Current software configurations", "Fail-safe: Selectable upscale/downscale break response"]
    },
    {
        id: "2558-A",
        name: "2558-A Isolated Analog Output (8-Ch)",
        category: "Analog I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "Independently isolated loop power outputs, guarding internal controller circuits against unexpected external field shorts or surge noise.",
        specs: ["Isolation: Full Channel-to-Channel Isolation", "Signal Outputs: 4-20mA / 0-10V", "Calibrated Diagnostic LEDs"]
    },

    // ==========================================
    // 5. DIGITAL / DISCRETE INPUTS & OUTPUTS
    // ==========================================
    {
        id: "2511-A",
        name: "2511-A AC Input Module (16-Point)",
        category: "Digital Input",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point discrete logic tracking interface designed for standard 110V mechanical switches, relays, and field interlock loops.",
        specs: ["Points: 16 Input Elements", "Nominal Rating: 115 VAC", "Isolation: Grouped Optical Barrier"]
    },
    {
        id: "2521-A",
        name: "2521-A AC Output Module (16-Point)",
        category: "Digital Output",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point robust AC solid-state control switchboard driving operational motor contractors, indicator beacons, and safety solenoid stacks.",
        specs: ["Points: 16 Discrete Outputs", "Voltage Window: 20-132 VAC", "Max Load: 2.0 Amps per point max"]
    },
    {
        id: "2580",
        name: "2580 Isolated AC Input Module",
        category: "Digital Input",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point fully isolated individual input circuits, resolving complex multi-phase phase sensing and isolated circuit cross-talk problems on older plants.",
        specs: ["Points: 16 Point-to-Point Isolated", "Operating Level: 95-132 VAC", "Filter Delay: 4.5ms fixed threshold"]
    },
    {
        id: "2581",
        name: "2581 Isolated Low-Voltage DC Input",
        category: "Digital Input",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point channel-to-channel isolated DC card safe for telemetry reporting across widely separated battery strings or standalone power nodes.",
        specs: ["Points: 16 Isolated Channels", "Voltage Support: 12-56 VDC Range", "Polarity: Independent Sink or Source wiring layouts"]
    },
    {
        id: "2582",
        name: "2582 High-Voltage Isolated DC Input",
        category: "Digital Input",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "Specialized 16-point isolated input interface engineered specifically to accept high-voltage substation switchgear battery connections safely.",
        specs: ["Points: 16 Isolated Paths", "Voltage Rating: 125 VDC Nominal", "Input Suppression: Heavy transient protection"]
    },
    {
        id: "2590",
        name: "2590 Isolated AC Output Module",
        category: "Digital Output",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "Premium 16-point individual circuit AC output controller preventing terminal path short-circuits from bleeding into neighboring circuit logic cards.",
        specs: ["Points: 16 Separated Outputs", "Load Window: 20-264 VAC", "Zero-Cross: Synchronized turn-on characteristics"]
    },
    {
        id: "2591",
        name: "2591 Isolated DC Output Module",
        category: "Digital Output",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point point-to-point isolated low voltage DC power routing module for driving instrumentation arrays and control desk signal loops.",
        specs: ["Points: 16 Isolated DC Drivers", "Rating: 11-60 VDC", "Short Circuit: Auto-protect reset features"]
    },
    {
        id: "2598",
        name: "2598 High-Density 16-Ch AC Output",
        category: "Digital Output",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "High-durability 16-point discrete AC solid-state card with advanced diagnostic thermal logging characteristics.",
        specs: ["Points: 16 Commutated Nodes", "Voltage: 120 VAC", "Fused protection blocks installed"]
    },
    {
        id: "2599",
        name: "2599 Ultra High-Density AC Output",
        category: "Digital Output",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "32-point high-density discrete output block designed to minimize required panel footprint allocations in massive central marshalling enclosures.",
        specs: ["Points: 32 Shared AC Pins", "Voltage: 120 VAC Standard", "Connector Type: Integrated Terminal Interface Block"]
    },

    // ==========================================
    // 6. SPECIALTY, TTL & DISTRIBUTED SLICE I/O
    // ==========================================
    {
        id: "2585",
        name: "2585 Isolated TTL / Word Input Module",
        category: "Specialty I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point fast logic level interface accepting direct 5V TTL sensor outputs, binary coded arrays, and raw digital testing signals.",
        specs: ["Points: 16 Isolated Channels", "Voltage: 5 VDC TTL Levels", "Update Speed: High-frequency scanning sync"]
    },
    {
        id: "2595",
        name: "2595 TTL / Word Output Module",
        category: "Specialty I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-point 5V logic driver providing direct interface signaling pipelines to local electronic testing manifolds and custom chip integrations.",
        specs: ["Points: 16 TTL Driven Out", "Logic Level: 5V Comms Standard", "Sink Capacity: Low draw electronics matching"]
    },
    {
        id: "2500S-23-1050",
        name: "2500S-23-1050 Slice I/O (Ethernet Block)",
        category: "Distributed I/O",
        line: "2500 Slice",
        status: "Mature",
        firmware: "v1.42",
        description: "Compact distributed module pairing standard mixed analog and digital signal channels out on single remote machinery rails via Ethernet links.",
        specs: ["I/O Mix: 4DI / 4DO / 2UAI / 2AO", "Comms: Built-in Ethernet Control Protocol", "Mounting: DIN-Rail Mount Base"]
    },
    {
        id: "2500S-26-1050",
        name: "2500S-26-1050 Slice I/O (Discrete Heavy)",
        category: "Distributed I/O",
        line: "2500 Slice",
        status: "Mature",
        firmware: "v1.42",
        description: "Distributed modular asset specializing in dense discrete operations with secondary input lines on remote field automation skips.",
        specs: ["I/O Mix: 8DIO Configurable / 2 Universal Analog Inputs", "Network Layer: Ethernet Sync Node", "Form Factor: Slimline Slice Configuration"]
    },

    // ==========================================
    // 7. POWER SUPPLIES & ENCLOSURE CHASSIS
    // ==========================================
    {
        id: "2518-A",
        name: "2518-A AC Rack Power Supply (75W)",
        category: "Power Supply",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "Heavy-duty 75W industrial power converter designed to slide into slot zero of 2500 Classic racks to supply clean, filtered backplane operating power.",
        specs: ["Input Range: 120/240 VAC Auto-sensing", "Output Power: 75 Watts Total Backplane Load", "Protection: Overvoltage and short circuit latching protection"]
    },
    {
        id: "2519-A",
        name: "2519-A DC Rack Power Supply (75W)",
        category: "Power Supply",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "24VDC alternative rack supply built to keep control structures running natively off substation battery systems or utility plant direct feeds.",
        specs: ["Input Voltage: 24 VDC Nominal", "Output Capacity: 75W System Bus Power", "Isolation: Galvanic Isolation Input-to-Backplane"]
    },
    {
        id: "2500C-R16",
        name: "2500C-R16 Compact 16-Slot Enclosure Chassis",
        category: "Base Chassis",
        line: "2500 Compact",
        status: "Active",
        firmware: "N/A",
        description: "High-density 16-slot mechanical holding chassis minimizing required depth and overall face profile inside field control enclosures.",
        specs: ["Slots available: 16 Module Channels", "Form Factor: Thin Width Compact Profile", "Grounding: Integrated copper binding lug blocks"]
    },

    // ==========================================
    // 8. SERIES 500 UPGRADE & MODERNIZATION HARDWARE
    // ==========================================
    {
        id: "2500-IADP",
        name: "2500-IADP I/O Base Adapter for Series 500",
        category: "Modernization Adapter",
        line: "Series 500 Upgrade",
        status: "Active",
        firmware: "N/A",
        description: "Mechanical translation bridge allowing modern CTI modules to slot cleanly into pre-existing legacy Simatic 500/505 backplane form-factors safely.",
        specs: ["Mechanical Alignment: Direct Match pinning rails", "Field Preservation: Retains all original legacy field wiring arm mounts", "Installation Time: Under 3 minutes per block"]
    },
    {
        id: "2500-PADP",
        name: "2500-PADP Power Adapter for Series 500",
        category: "Modernization Adapter",
        line: "Series 500 Upgrade",
        status: "Active",
        firmware: "N/A",
        description: "Specialized adapter plate aligning new standard 2518-A or 2519-A power modules cleanly into old physical legacy slots.",
        specs: ["Compatibility: Adapts 2518-A/2519-A supplies", "Footprint: Precision engineered structural backing plate", "Vibration Rating: High Industrial Class Spec"]
    },
    {
        id: "2500-RADP",
        name: "2500-RADP RBC Base Adapter for Series 500",
        category: "Modernization Adapter",
        line: "Series 500 Upgrade",
        status: "Active",
        firmware: "N/A",
        description: "Structural interface bridge mounting current 2500-RBC communication heads over old network spacing frameworks safely.",
        specs: ["Function: Bridges modern communication controller modules", "Ground Tracking: Enhanced backplane shield termination layout", "Status: Active Product"]
    }
];
