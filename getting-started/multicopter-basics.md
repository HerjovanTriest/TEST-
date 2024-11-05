---
description: A quick overview of the basic components of a multirotor
---

# Multicopter Basics

#### The following information has been procured by the[ PX4 team](https://docs.px4.io/main/en/). All links will lead to their page. <a href="#flight-controller" id="flight-controller"></a>

<details>

<summary>Flight Controller​</summary>

Physically, a flight controller is nothing more than a circuit board with electronic chips on them. You can compare them to the motherboard and processor in your laptop. The flight controller is the brain of a drone. A small box filled with intelligent electronics and software, which monitors and controls everything the drone does. And just like the brains of different organisms, flight controllers also vary in sizes and complexity.&#x20;

![](https://docs.px4.io/main/assets/pixhawk\_v6x.DcJp\_GVC.jpg)

For more information see: [Flight Controller Selection](https://docs.px4.io/main/en/getting\_started/flight\_controller\_selection.html)

</details>

<details>

<summary>Sensors</summary>

Sensors are used to determine a vehicle state, which it needs in order to stablise the vehicle and enable autonomous control. The vehicle states include: position/altitude, heading, speed, airspeed, orientation (attitude), rates of rotation in different axes, battery level, and so on.

A flight computer uses a [gyroscope](https://docs.px4.io/main/en/sensor/gyroscope.html), [accelerometer](https://docs.px4.io/main/en/sensor/accelerometer.html), [magnetometer](https://docs.px4.io/main/en/gps\_compass/magnetometer.html) (compass) and [barometer](https://docs.px4.io/main/en/sensor/barometer.html). This minimal set of sensors is incorporated into [Pixhawk Series](https://docs.px4.io/main/en/flight\_controller/pixhawk\_series.html) flight controllers (and is also often found in other controller platforms).

Additional/external sensors can be attached to the controller. The following sensors are recommended:

*   A [GNSS/GPS](https://docs.px4.io/main/en/gps\_compass/) or other source of global position is needed to enable all automatic modes, and some manual/assisted modes.

    Typically a module that combines a GNSS and Compass is used, as an external compass can be made less susceptible to electromomagnetic interference than the internal compass in the flight controller.
* [Airspeed sensors](https://docs.px4.io/main/en/sensor/airspeed.html) are highly recommended for fixed-wing and VTOL-vehicles.
* [Distance Sensors (Rangefinders)](https://docs.px4.io/main/en/sensor/rangefinders.html) are highly recommended for all vehicle types, as they allow smoother and more robust landings, and enable features such as terrain following on multicopters.
* [Optical Flow Sensors](https://docs.px4.io/main/en/sensor/optical\_flow.html) can be used with distance sensors on multcopters and VTOL to support navigation in GNSS-denied environments.

For more information about sensors see: [Sensor Hardware & Setup](https://docs.px4.io/main/en/sensor/).

</details>

<details>

<summary>Motors &#x26; ESC's</summary>

Motors come in two varieties, brushed or brushless. The working principles of brushed and brushless motors are the same, both are based on electromagnetism.

When the motor windings (coils) become energized by current, it creates a temporary magnetic field that repels against or attracts the permanent magnets inside the motor. By alternating the current, you can create a continuous magnetic force that spins the motor around the shaft.

However the construction of the two motor types are very different.

A “brushed” motor has a rotating stator (wire coils) which acts as an electromagnet with two poles. The shell is stationary (not moving) therefore brushed motors can often be mounted without using any screws.

A “brushless” motor uses a permanent magnet and accomplishes the switching by electronically switching the polarity, instead of brushes, hence the name “brushless”. Because of the moving motor bell, the motor is usually mounted by the base using screws.

Brushless motors are the more popular choice for drones. They are used in almost all types of drones and sizes, including giant heavy lifter to those lower power micro drones that runs on 1S LiPo batteries. This is due to the following advantages brushless has over brushed.&#x20;

* No brushes – lower maintenance and longer durability
* More efficient – less energy wasted as heat
* Better speed and torque due to the absence of brushes, because brush friction increases with speed
* Wider speed range
* Better heat dissipation due to the construction compared to brushed motors
* More cost effective for high speed/power operations

One of the advantages is a wider speed range. This speed range is controlled using an Electronic Speed Controller or ESC for short.&#x20;

An electronic speed control follows a speed reference signal (derived from a throttle lever, joystick, or other manual input) and varies the switching rate of a network of [field effect transistors](https://en.wikipedia.org/wiki/Field\_effect\_transistor) (FETs).[\[1\]](https://en.wikipedia.org/wiki/Electronic\_speed\_control#cite\_note-1) By [adjusting the duty cycle](https://en.wikipedia.org/wiki/Pulse-width\_modulation) or switching frequency of the transistors, the speed of the motor is changed. The rapid switching of the current flowing through the motor is what causes the motor itself to emit its characteristic high-pitched whine, especially noticeable at lower speeds.

Different types of speed controls are required for [brushed DC motors](https://en.wikipedia.org/wiki/Brushed\_DC\_motor) and [brushless DC motors](https://en.wikipedia.org/wiki/Brushless\_DC\_motor). A brushed motor can have its speed controlled by varying the voltage on its armature. A brushless motor requires a different operating principle. The speed of the motor is varied by adjusting the timing of pulses of current delivered to the several windings of the motor.

</details>

<details>

<summary>Outputs: Motors, Servos, Actuators​</summary>

Flightcontrollers use outputs to control: motor speed (e.g. via [ESC](https://docs.px4.io/main/en/getting\_started/px4\_basic\_concepts.html#escs-motors)), flight surfaces like ailerons and flaps, camera triggers, parachutes, grippers, and many other types of payloads.

The outputs may be PWM ports or DroneCAN nodes. The images below show the PWM output ports for [Pixhawk 4](https://docs.px4.io/main/en/flight\_controller/pixhawk4.html) and [Pixhawk 4 mini](https://docs.px4.io/main/en/flight\_controller/pixhawk4\_mini.html).

![Pixhawk 4 output ports](https://docs.px4.io/main/assets/pixhawk4\_main\_aux\_ports.D87kZmDB.jpg) ![Pixhawk4 mini MAIN ports](https://docs.px4.io/main/assets/pixhawk4mini\_pwm.D2GEQ3GW.png)

This will change with other flight controllers. Outputs are a crucial part of flighing autonomously. As this will rely on, for example an accurate GPS signal. This can be done by plugging in multiple GPS's.&#x20;

</details>

<details>

<summary>Manual Control​</summary>

Pilots can control a vehicle manually using either a [Radio Control (RC) System](https://docs.px4.io/main/en/getting\_started/rc\_transmitter\_receiver.html) or a [Joystick/Gamepad](https://docs.px4.io/main/en/config/joystick.html) controller connected via QGroundControl.

![Taranis X9D Transmitter](https://docs.px4.io/main/assets/frsky\_taranis\_x9d\_transmitter.BQmhxEyx.jpg) ![Photo of MicroNav, a ground controller with integrated joysticks](https://docs.px4.io/main/assets/micronav.Dx\_env08.jpg)

RC systems use a dedicated ground-based radio transmitter and vehicle-based receiver for sending control information. They should always be used when first tuning/testing a new frame design, or when flying racers/acrobatically (and in other cases where low latency is important).

Joystick systems use QGroundControl to encode the control information from a "standard" computer gaming joystick into MAVLink messages, and sent it to the vehicle using the (shared) telemetry radio channel. They can be used for most manual flight use cases such as taking off, surveys, and so on, provided your telemetry channel has a high enough bandwidth/low latency.

Joysticks are often used in integrated GCS/manual control systems because it is cheaper and easier to integrate a joystick than a separate radio system, and for the majority of use cases, the lower latency does not matter. They are also perfect for flying the PX4 simulator, because you can plug them directly into your ground control computer.

</details>

<details>

<summary>Offboard/Companion Computer​</summary>

A [Companion Computer](https://docs.px4.io/main/en/companion\_computer/) (also referred to as "mission computer" or "offboard computer"), is a separate on-vehicle computer that communicates with PX4 to provide higher level command and control.

The companion computer usually runs Linux, as this is a much better platform for "general" software development, and allows drones to leverage pre-existing software for computer vision, networking, and so on.

The flight controller and companion computer may be pre-integrated into a single baseboard, simplifying hardware development, or may be separate, and are connected via a serial cable, Ethernet cable, or wifi. The companion computer typically communicates with PX4 using a high level Robotics API such as [MAVSDK](https://mavsdk.mavlink.io/) or [ROS 2](https://docs.px4.io/main/en/ros2/user\_guide.html).

Relevant topics include:

* [Companion Computers](https://docs.px4.io/main/en/companion\_computer/)
* [Off-board Mode](https://docs.px4.io/main/en/flight\_modes/offboard.html) - Flight mode for offboard control of PX4 from a GCS or companion computer.
* [Robotics APIs](https://docs.px4.io/main/en/robotics/)

</details>

<details>

<summary>Payloads</summary>

Payloads are equipment carried by the vehicle to meet user or mission objectives, such as cameras in surveying missions, instruments used in for inspections such as radiation detectors, and cargo that needs to be delivered. PX4 supports many cameras and a wide range of payloads.

Payloads are connected to [Flight Controller outputs](https://docs.px4.io/main/en/getting\_started/px4\_basic\_concepts.html#outputs-motors-servos-actuators), and can be triggered automatically in missions, or manually from an RC Controller or Joystick, or from a Ground Station (via MAVLink/MAVSDK commands).

For more information see: [Payloads & Cameras](https://docs.px4.io/main/en/payloads/)

</details>

<details>

<summary>Heading and Directions​</summary>

All the vehicles, boats and aircraft have a heading direction or an orientation based on their forward motion.

<img src="https://docs.px4.io/main/assets/frame_heading.BvCcZ-mD.png" alt="Frame Heading" data-size="original">

INFO

For a VTOL Tailsitter the heading is relative to the multirotor configuration (i.e. vehicle pose during takeoff, hovering, landing).

It is important to know the vehicle heading direction in order to align the autopilot with the vehicle vector of movement. Multicopters have a heading even when they are symmetrical from all sides! Usually manufacturers use a colored props or colored arms to indicate the heading.

<img src="https://docs.px4.io/main/assets/frame_heading_top.DG5GXphP.png" alt="Frame Heading TOP" data-size="original">

In our illustrations we will use red coloring for the front propellers of multicopter to show heading.

You can read in depth about heading in [Flight Controller Orientation](https://docs.px4.io/main/en/config/flight\_controller\_orientation.html)

</details>
