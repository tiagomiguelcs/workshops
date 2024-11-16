# Dependencies: python3-pip, python3-serial
import serial
import time
import sys

# Read arguments.
command = sys.argv[1];
seconds = 3;

# Initialize serial connection to Arduino (adjust COM port as needed).
# Use 'COM3' for Windows, or '/dev/[name]' for Linux.
arduino = serial.Serial(port='/dev/ttyACM0', baudrate=9600, timeout=1)  

# Wait for Arduino to reset.
time.sleep(2) 

def call_function_on_arduino(command):
    # Send command to Arduino
    arduino.write(f"{command}\n".encode())
    # Read response
    response = arduino.readline().decode('utf-8').strip()
    return response

# Call Arduino's functions.
command = sys.argv[1];
print(call_function_on_arduino(command.upper()));
time.sleep(seconds)  # Small delay for clarity
print(call_function_on_arduino("S"));

# Close the serial connection.
arduino.close()

