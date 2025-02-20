3D Printing with remote sensing, error stopping, and shape evolution (Joint Project SDL0/5)

# OctoPrint
- Obico is an open source project for AI error detection
- What kind of printers do we use
- How many prints are we handling at once (for GPU sourcing)
- What will we be printing?

## Main Station
- Username: hatchan
- Password: SDLPr1nT3R5
- IP: 192.168.10.108
- Raspberry Pi doesn't work with the 5GHz band!
- OctoPrint comes preconfigured to utilize Google's DNS server 8.8.8.8, port 53 for the connectivity check (if it's enabled). If you have concerns about using that, define the IP and port of a different online server that you trust and that has a high availability.
- API Key: B33A6112B574498DA3CDAB6ADBA71E3D

## Testing Station:
- Username: karma
- Password: SDLPr1nT3R5
- Wifi password: 31185981
- Test setup IP: http://192.168.10.100
- Stream URL: /webcam/?action=stream
- Snapshot URL: http://127.0.0.1:8080/?action=snapshot
- prusa-slicer-console --help

## Camera Compatibility
- 1.11 cam + 20624 long YES
- 7.20 cam + 20624 long NO
- 7.20 cam + 20706 short NO
- 1.11 cam + 20706 short NO
- 7.20 cam + 20706 short NO
- 

# Slicing automatically

## Differences between PrusaSlicer CLI and Slic3r
- Change
    - slic3r [ ACTION ] [ OPTIONS ] [ model1.stl model2.stl ... ] to
    - prusa-slicer-console [ ACTION ] [ OPTIONS ] [ model1.stl model2.stl ... ]
- instead of --help-options we have --help-fff and --help-sla
- we have an additional parameter --loglevel to configure severity of messages printed out to the console
- we support --export-sla, not --export-sla-svg nor --export-svg
- we don't support --cut-grid , --cut-x , --cut-y , --autosave

## CLI notes
prusa-slicer-console [ ACTION ] [ OPTIONS ] [ model1.stl model2.stl ... ]

### Actions
- `-g` slices and exports to gcode
    - Export-specific Options
        - `-o FILENAME` 
            - Directories can be given to where the file with the default file-name can be stored
        - `--output-filename-format FORMAT` Format of export file
- `--info` outputs model info

### Options - (Applied Sequentially)
- `-m` arrange and merge models
    - `--dont-arrange` merge at original coordinates
- `--center X,Y` centers the geometric center on (X,Y)
    - `--align-xy X,Y` centers the bounding box on (X,Y)
    - without specification `-g` will center the model around the centroid of the print bed
        - unless `--dont-arrange` is selected, original model coordinates will be used
- `--scale FACTOR`
- `--scale-to-fit X,Y,Z`
- `--rotate ANGLE` rotation around the z-axis
- `--rotate-x ANGLE` rotation around the x-axis
- `--rotate-y ANGLE` rotation around the y-axis
- `--duplicate NUM` NUM is number of copies for each model, arranged to not overlap
- `--duplicate-grid X,Y` creates an `X x Y` grid of duplicate models
    - `--duplicate-distance` changes the spacing for both
- `--cut Z` cuts the model in two at the given Z and exports as separate
- `--cut-x X` ^^^
- `--cut-y Y` ^^^
- `--cut-grid X,Y` cuts all models in a grid
- `--split` detects unconnected parts in the niput models and splits them into separate objects
- `--repair` repairs non-manifold meshes (implicitly added when sliced, i.e. --cut*, --export-*)
- `--datadir PATH` use path directory for `.ini` files instead of default. 

#### Filename Formats
- `[input_filename_base]` input filename without extension
- [timestamp] date/time
- 

### Usage
- `prusa-slicer-console [ ACTION ] [ OPTIONS ] [ model1.stl model2.stl ... ] --load my_config.ini` Uses your presets
    - `File > Export Config` allows you to export it
    - `prusa-slicer-console [ ACTION ] [ OPTIONS ] [ model1.stl model2.stl ... ] --load my_config.ini --fill-pattern concentric` You can override options
    - You can append many `.ini` files
    - `--ignore-nonexistent-config` ignores none-existent `.ini` file
    - `--autosave my_config.ini` 
    - `prusa-slicer-console --autosave FILENAME.ini` opens prusa slicer and saves current presets

## WSL
- Access to windows files
    - df -h
    - cd /mnt/c/users/nasru

## For later :)
- In the command line, you can run: ` ./example.sh arg1 arg2 `
        - This runs `example.sh` with the preloaded arguments in the variables `$1` and `$2`


STL File Processing

Import STL files for 3D models.
Validate and prepare the STL files for slicing.
Command Line Slicing with PrusaSlicer

Utilize PrusaSlicer for automated slicing.
Generate G-code from STL files via command line interface.
G-code File Management

Store generated G-code files in a designated directory.
Ensure G-code files are ready for printing.
API Integration with OctoPrint

Use API calls to communicate with OctoPrint.
Automatically upload G-code to OctoPrint server.
Automated 3D Printing Execution

Initiate print jobs directly from the program.
Monitor and manage printing process through OctoPrint.

