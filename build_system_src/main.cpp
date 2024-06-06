#include <fstream>
#include <sstream>
#include <string>
#include <map>
#include <iostream>

int main(int argc, char* argv[]) {

    // Echo the current location of the binary
    std::cout << "Binary location: " << argv[0] << std::endl;
    // Echo all command line arguments
    for (int i = 1; i < argc; i++) {
        std::cout << "Argument " << i << ": " << argv[i] << std::endl;
    }
    std::string argument;
    if (argc > 1) {
        argument = argv[1];
    if (argument == "configure") {
        // Code for the "configure" option
        // ...
    } else if (argument == "kernel") {
        
    } else if (argument == "modules") {
        if (argc > 2) {
                std::string argument2 = argv[2];
                if (argument2 == "install") {
                    // Code for the "modules install" option
                    // ...
                } else if (argument2 == "build") {
                    // Code for the "modules uninstall" option
                    // ...
                } else {
                    std::cout << "Invalid argument: " << argument2 << std::endl;
                }
        } else {
            std::cout << "Missing argument for 'modules' option" << std::endl;
        }

    } else if (argument == "u-boot") {
        // Code for the "u-boot" option
        // ...
    } else if (argument == "image") {
        // Code for the "image" option
        // ...
    } else if (argument == "patch") {
        // Code for the "patch" option
        // ...
    } else if (argument == "rootfs") {
        // Code for the "patch" option
        // ...
    } else {
        std::cout << "Invalid argument: " << argument << std::endl;
    }
        
    }
    std::ifstream file("config.cfg");
    std::string line;
    std::map<std::string, std::string> config;


    while (std::getline(file, line)) {
        std::istringstream is_line(line);
        std::string key;
        if (std::getline(is_line, key, '=')) {
            std::string value;
            if (std::getline(is_line, value)) {
                config[key] = value;
            }
        }
    }

    // Now you can use the config map, for example print all keys and values
    for (const auto &pair : config) {
        std::cout << "Key: " << pair.first << ", Value: " << pair.second << std::endl;
    }

    return 0;
}