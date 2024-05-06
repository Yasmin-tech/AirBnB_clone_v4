#!/usr/bin/python3
""" create data for db"""

from models import storage
from models.place import Place
from models.user import User
from models.review import Review
from models.state import State
from models.city import City
from models.amenity import Amenity

state1 = State(name="Texas")
state1.save()

state2 = State(name="Alabama")
state2.save()


city1 = City(name="Houston", state_id=state1.id)
city1.save()

city2 = City(name="Dallas", state_id=state1.id)
city2.save()

city3 = City(name="Auburn", state_id=state2.id)
city3.save()

user1 = User(email="user@email.com", password="123")
user1.save()

place1 = Place(city_id=city1.id, user_id=user1.id, name="first place", number_rooms="2",
                number_bathrooms="1", max_guest="2", price_by_night="90")
place1.save()

place2 = Place(city_id=city2.id, user_id=user1.id, name="second place", number_rooms="1",
                number_bathrooms="1", max_guest="1", price_by_night="100")
place2.save()

place3 = Place(city_id=city1.id, user_id=user1.id, name="third place", number_rooms="5",
                number_bathrooms="2", max_guest="6", price_by_night="1900")
place3.save()

amenity1 = Amenity(name="phone")
amenity1.save()

amenity2 = Amenity(name="internet")
amenity2.save()

amenity3 = Amenity(name="garden")
amenity3.save()

review1 = Review(place_id=place1.id, user_id=user1.id, text="good place")
review1.save()

storage.close()
