# @mineproxy/logger

> Logger plugin for MineProxy

## Installation

In the MineProxy directory run:
```bash
npm install @mineproxy/logger
```

Add `@mineproxy/logger` to plugins list

## Configuration

```json
{
  "logger": {
    "dump": [],
    "dump_all": false,
    "dump_blacklist": []
  }
}
```

## Example config

```json
{
  "logger": {
    "dump": [
      "open_window",
      "close_window",
      "set_slot",
      "window_items",
      "craft_progress_bar",
      "transaction",
      "set_creative_slot",
      "enchant_item",
      "window_click"
    ],
    "dump_all": false,
    "dump_blacklist": [
      "keep_alive",
      "update_time",
      "entity_velocity",
      "rel_entity_move",
      "entity_look",
      "entity_move_look",
      "entity_teleport",
      "entity_head_rotation",
      "position"
    ]
  }
}
```