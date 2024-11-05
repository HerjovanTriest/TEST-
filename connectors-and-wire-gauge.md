---
hidden: true
---

# Connectors and Wire Gauge

### Connectors

When building or designing drones, choosing the right connectors is crucial for ensuring efficient power distribution and reliable performance. The three most common types of connectors you’ll encounter are **JST**, **XT**, and **Deans** connectors. Each has specific applications based on current requirements, size, and weight. The following sections explain what each of these connectors is and highlight their unique features.

<details>

<summary>XT</summary>

XT connectors are a popular choice for high-current applications, specifically designed to handle more power compared to JST connectors. They are commonly used in RC vehicles and drones due to their robustness and capacity for safely carrying high amounts of current without overheating.

**Types of XT Connectors**:

* **XT30**: Used in smaller drones where the current requirements are relatively low (up to 30A).
* **XT60**: One of the most commonly used connectors in mid-sized drones, handling currents up to 60 amps.
* **XT90**: Used in large, high-powered drones or heavy-lift systems, with a current rating of up to 90 amps.

**Applications**: XT connectors are used in drones to connect **LiPo batteries** to the power distribution board (PDB), electronic speed controllers (ESCs), and other high-current components. They are ideal for drones requiring high power output, such as racing drones or larger UAVs (unmanned aerial vehicles). XT connectors’ secure fit and large surface area help minimize resistance and heat, making them highly reliable.

**Key Features**:

* **Durability**: XT connectors are made of high-strength, flame-retardant nylon with gold-plated contacts, which ensures a solid connection with minimal risk of melting or short-circuiting.
* **Ease of Use**: They feature a bullet-style connection that ensures a snug, reliable fit between the male and female components.
* **High Current Handling**: XT connectors, depending on the type (XT30, XT60, XT90), are rated to handle between 30A and 90A, making them ideal for high-performance drones that require significant power.

**Advantages**:

* **High Current Capacity**: XT connectors are designed for handling high currents, making them suitable for powerful drones.
* **Robust Connection**: These connectors provide a secure and reliable fit, reducing the risk of disconnections during flight.

**Disadvantages**:

* **Size and Weight**: XT connectors are bulkier than JST connectors, which can add extra weight to the drone.

</details>

<details>

<summary>JST</summary>

JST connectors are small, lightweight, and generally used for low-current applications. "JST" stands for **Japan Solderless Terminal**, and the term refers to a wide range of connector types. However, in the context of drone design, the most common is the **JST-XH** series, used for battery balance leads or lightweight electronics connections.

**Applications**: In drones, JST connectors are most often used for connecting small components, such as sensor wires, LED lights, or low-power motors. They are ideal for drones where space is limited and where large amounts of current are not needed. For instance, in smaller quadcopters or micro drones, JST connectors are a go-to for linking control electronics to the battery or flight controller. They are also common for connecting balancing leads on **LiPo** (Lithium Polymer) batteries, ensuring that all cells within the battery charge evenly.

**Key Features**:

* **Current Rating**: Typically, JST connectors are rated for currents up to 3 amps, which makes them suitable for low-current applications.
* **Pin Types**: JST connectors are available in different pin configurations, from 2-pin to multi-pin types, allowing flexibility in how they are used.
* **Size**: Compact, which makes them perfect for lightweight drones or applications where every gram counts.

**Advantages**:

* **Lightweight and Compact**: Their small size and low weight make them ideal for microdrones and compact electronics.
* **Ease of Use**: They can be easily soldered to wires or connected to small circuit boards.

**Disadvantages**:

* **Low Current Capacity**: Due to their small size, JST connectors cannot handle high current, making them unsuitable for connecting motors or high-power components in larger drones.

</details>

<details>

<summary>Deans</summary>

Deans connectors, also known as **T-Plugs**, are a popular connector type for drones and RC vehicles, prized for their efficiency and compact size. Deans connectors provide a reliable connection and are commonly used in situations where space-saving is necessary without sacrificing current capacity.

**Applications**: Deans connectors are frequently used in drones where high current capacity is needed, but space is a premium. Their small size makes them a good fit for racing drones or FPV (First Person View) drones, where speed and maneuverability are key and every gram counts. They are often used to connect LiPo batteries to the ESCs or power distribution boards of these drones.

**Key Features**:

* **Current Rating**: Deans connectors are typically rated to handle around 60 amps, which makes them comparable to XT60 connectors.
* **Low Resistance**: The design of Deans connectors minimizes resistance, allowing for efficient power transfer, even at high currents.
* **Compact Size**: Despite their high current handling capability, Deans connectors are relatively small and lightweight.

**Advantages**:

* **Compact Design**: Deans connectors are smaller than XT connectors, making them ideal for drones where space is limited.
* **Efficient Power Transfer**: Low resistance means less energy is lost as heat, ensuring efficient power delivery to your drone’s components.

**Disadvantages**:

* **Tight Fit**: Deans connectors can be hard to pull apart due to their tight fit, which can be a challenge during field repairs or battery swaps.

</details>

### Wire Gauge

Wire gauge refers to the thickness of the wire, and it plays a crucial role in determining how much current the wire can carry without overheating. In drone design, choosing the correct wire gauge is critical to ensure that the drone can handle the current load of its motors, batteries, and other components. Wire gauge is measured using the **AWG (American Wire Gauge)** system, where a lower number means a thicker wire, and a higher number means a thinner wire.

**Common Wire Gauges in Drones**:

* **16-18 AWG**: Typically used for small, low-power drones. These wire gauges are suited for components that don’t require high current, such as LED lights, small sensors, or minor electronics.
* **12-14 AWG**: Commonly used in mid-sized drones for components such as the main power leads, connecting the battery to the PDB or ESCs. These wires can handle moderate current loads while still being relatively flexible.
* **10 AWG and Lower**: Used in large, high-powered drones where the current demands are significant. These thick wires are necessary to ensure that the drone’s power system doesn’t overheat or experience significant voltage drops under load.

Using wires that are too thin for the current load can lead to excessive heating, increased resistance, and potentially dangerous conditions, such as wire melting or fires. On the other hand, wires that are too thick can add unnecessary weight and reduce the efficiency of the drone, especially in high-performance applications like drone racing.

To select the right wire gauge for a project the following page can be used: [Spruce](https://www.thespruce.com/matching-wire-size-to-circuit-amperage-1152865)
