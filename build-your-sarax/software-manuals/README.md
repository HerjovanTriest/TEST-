# Software Manuals

```
from djitellopy import Tello
import cv2

# Initialize the Tello drone
tello = Tello()

# Connect to the drone
tello.connect()

# Start video stream
tello.streamon()

# Create a window to display the video
cv2.namedWindow("Drone Camera Feed")

try:
    while True:
        # Get the frame from the drone's camera
        frame = tello.get_frame_read().frame

        # Show the frame in the window
        cv2.imshow("Drone Camera Feed", frame)

        # Check for key press to take a picture or exit
        key = cv2.waitKey(1)
        if key == ord('s'):  # Press 's' to save a picture
            cv2.imwrite("drone_image.jpg", frame)
            print("Picture saved as drone_image.jpg")
        elif key == ord('q'):  # Press 'q' to quit
            break

finally:
    # Stop the video stream and disconnect
    tello.streamoff()
    tello.end()
    cv2.destroyAllWindows()

```
