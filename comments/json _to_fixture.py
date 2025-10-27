"""Command-line utility for converting a JSON file to a Django fixture."""

import json
import sys


def json_to_fixture(json_name, fixture_name):

    with open(json_name, mode="r", encoding="utf-8") as read_file:
        json_data = json.load(read_file)

    django_data = []
    for json_object in json_data["comments"]:
        django_data.append(
            {
                "model": "comments.comment",
                "pk": json_object.pop("id"),
                "fields": json_object,
            }
        )

    with open(fixture_name, mode="w", encoding="utf-8") as write_file:
        json.dump(django_data, write_file)


if __name__ == "__main__":
    if len(sys.argv) >= 3:
        json_name = sys.argv[1]
        fixture_name = sys.argv[2]
        json_to_fixture(json_name, fixture_name)
